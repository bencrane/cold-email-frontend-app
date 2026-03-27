const inputClass =
  "w-full rounded-[var(--radius-sm)] border border-border bg-bg px-3 py-2.5 text-sm text-text-primary placeholder:text-text-tertiary focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent";

const labelClass = "mb-1.5 block text-sm font-medium text-text-secondary";

type FormInputProps = {
  label?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

export function FormInput({ label, id, className = "", ...props }: FormInputProps) {
  return (
    <div>
      {label && (
        <label htmlFor={id} className={labelClass}>
          {label}
        </label>
      )}
      <input id={id} className={`${inputClass} ${className}`.trim()} {...props} />
    </div>
  );
}

type FormTextareaProps = {
  label?: string;
} & React.TextareaHTMLAttributes<HTMLTextAreaElement>;

export function FormTextarea({ label, id, className = "", ...props }: FormTextareaProps) {
  return (
    <div>
      {label && (
        <label htmlFor={id} className={labelClass}>
          {label}
        </label>
      )}
      <textarea
        id={id}
        className={`${inputClass} resize-none ${className}`.trim()}
        {...props}
      />
    </div>
  );
}

type FormSelectProps = {
  label?: string;
} & React.SelectHTMLAttributes<HTMLSelectElement>;

export function FormSelect({
  label,
  id,
  children,
  className = "",
  ...props
}: FormSelectProps) {
  return (
    <div>
      {label && (
        <label htmlFor={id} className={labelClass}>
          {label}
        </label>
      )}
      <select id={id} className={`${inputClass} ${className}`.trim()} {...props}>
        {children}
      </select>
    </div>
  );
}
