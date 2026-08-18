"use client";
import { useState } from "react";

interface ContactFormProps {
  formTitle: string;
  formName: string;
  formEmail: string;
  formPhone: string;
  formMessage: string;
  formPlaceholderName: string;
  formPlaceholderEmail: string;
  formPlaceholderPhone: string;
  formPlaceholderMessage: string;
  formSubmit: string;
}

export default function ContactForm({
  formTitle,
  formName,
  formEmail,
  formPhone,
  formMessage,
  formPlaceholderName,
  formPlaceholderEmail,
  formPlaceholderPhone,
  formPlaceholderMessage,
  formSubmit,
}: ContactFormProps) {
  const [sending, setSending] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSending(true);

    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      phone: (form.elements.namedItem("phone") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        alert("Mensagem enviada com sucesso!");
        form.reset();
      } else {
        const err = await res.json();
        alert(err.error || "Erro ao enviar. Tente novamente.");
      }
    } catch {
      alert("Erro de conexão. Tente novamente.");
    } finally {
      setSending(false);
    }
  }

  return (
    <div className="contact-form reveal visible">
      <h3>{formTitle}</h3>
      <form onSubmit={handleSubmit}>
        <div className="field-row">
          <div>
            <label htmlFor="name">{formName}</label>
            <input type="text" id="name" name="name" placeholder={formPlaceholderName} required />
          </div>
        </div>

        <div className="field-row">
          <div>
            <label htmlFor="email">{formEmail}</label>
            <input type="email" id="email" name="email" placeholder={formPlaceholderEmail} required />
          </div>
          <div>
            <label htmlFor="phone">{formPhone}</label>
            <input type="tel" id="phone" name="phone" placeholder={formPlaceholderPhone} />
          </div>
        </div>

        <div>
          <label htmlFor="message">{formMessage}</label>
          <textarea id="message" name="message" placeholder={formPlaceholderMessage} required></textarea>
        </div>

        <button type="submit" className="btn btn-primary" disabled={sending}>
          {sending ? "Enviando..." : formSubmit}
        </button>
      </form>
    </div>
  );
}
