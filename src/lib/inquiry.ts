export function enhanceInquiry(form: HTMLFormElement) {
  const submit = form.querySelector<HTMLButtonElement>('button[type="submit"]')!;
  const status = form.querySelector<HTMLElement>('.form-status')!;
  const summary = form.querySelector<HTMLElement>('.error-summary')!;
  const originalLabel = submit.textContent;
  const field = (name: string) => form.elements.namedItem(name) as HTMLInputElement | HTMLTextAreaElement;
  const method = form.elements.namedItem('reply-method') as RadioNodeList;
  const replyTypes = ['email', 'phone'];
  const validationFields = ['full-name', 'email', 'phone', 'message'];
  const instructions = form.dataset;
  let submitting = false;

  function setError(name: string, error = '') {
    const control = field(name);
    const notice = form.querySelector<HTMLElement>(`#${name}-error`)!;
    notice.hidden = !error;
    notice.textContent = error;
    if (error) control.setAttribute('aria-invalid', 'true');
    else control.removeAttribute('aria-invalid');
  }

  function syncReplyMethod() {
    for (const name of replyTypes) {
      const selected = method.value === name;
      const input = field(name);
      form.querySelector<HTMLElement>(`[data-reply="${name}"]`)!.hidden = !selected;
      input.disabled = !selected;
      input.required = selected;
      if (!selected) setError(name);
    }
  }

  function validate() {
    const reply = field(method.value);
    const value = reply.value.trim();
    const digits = value.replace(/\D/g, '').length;
    const validPhone = /^\+?[\d().\s-]+$/.test(value) && digits >= 7 && digits <= 15;
    const errors: Record<string, string | undefined> = {
      'full-name': field('full-name').value.trim() ? '' : instructions.required,
      message: field('message').value.trim() ? '' : instructions.required,
    };

    if (!value) errors[method.value] = instructions.required;
    else if (method.value === 'email' && reply.validity.typeMismatch) errors.email = instructions.invalidEmail;
    else if (method.value === 'phone' && !validPhone) errors.phone = instructions.invalidPhone;

    for (const name of validationFields) setError(name, errors[name]);
    const invalid = Object.values(errors).some(Boolean);
    summary.hidden = !invalid;
    if (invalid) summary.focus();
    return !invalid;
  }

  form.noValidate = true;
  syncReplyMethod();

  form.addEventListener('input', (event) => {
    const input = event.target;
    if (!(input instanceof HTMLInputElement || input instanceof HTMLTextAreaElement)) return;
    if (input.name === 'reply-method') syncReplyMethod();
    if (input.hasAttribute('aria-invalid')) setError(input.name);
    if (!form.querySelector('[aria-invalid="true"]')) summary.hidden = true;
    if (!submitting) status.textContent = '';
  });

  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    if (submitting || !validate()) return;

    const payload = new URLSearchParams();
    for (const [name, value] of new FormData(form)) {
      if (typeof value === 'string') payload.append(name, value.trim());
    }

    submitting = true;
    submit.disabled = true;
    submit.textContent = instructions.working ?? originalLabel;
    status.textContent = '';

    try {
      const response = await fetch(form.action, {
        method: 'POST',
        body: payload,
        signal: AbortSignal.timeout(15_000),
      });
      if (!response.ok) throw new Error(`Form submission returned ${response.status}`);
      form.reset();
      syncReplyMethod();
      status.dataset.state = 'success';
      status.textContent = instructions.success ?? '';
    } catch {
      status.dataset.state = 'error';
      status.textContent = instructions.failure ?? '';
    } finally {
      submitting = false;
      submit.disabled = false;
      submit.textContent = originalLabel;
    }
  });
}
