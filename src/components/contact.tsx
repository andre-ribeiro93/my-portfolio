"use client"

import React, { useState } from "react";
import { useForm } from "@formspree/react";
import { MdErrorOutline } from "react-icons/md";
import { FaArrowRight } from "react-icons/fa6";

export default function ContactForm() {
  
  const [state, handleSubmitFormspree] = useForm(process.env.NEXT_PUBLIC_FORM_KEY!);
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [emailError, setEmailError] = useState<string | null>(null);
  const [messageError, setMessageError] = useState<string | null>(null);

  const validateEmail = (value: string) => {
    const re = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;

    if (!value.trim()) return "Por favor, insira um e-mail.";

    if (!re.test(value.toLowerCase())) return "Por favor, insira um e-mail válido.";

    return null;
  };

  const validateMessage = (value: string) => {

    if (!value.trim()) return "Por favor, insira sua mensagem.";

    return null;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const emailErr = validateEmail(email);
    const messageErr = validateMessage(message);

    setEmailError(emailErr);
    setMessageError(messageErr);

    if (!emailErr && !messageErr) {
      // enviar para o Formspree
      handleSubmitFormspree(e);
    }
  };

  if (state.succeeded) {
    return (
      <p className="subtitle pr-24 pt-24 pb-36">
        Obrigado pelo contato. Retornarei em breve.
      </p>
    );
  }

  return (
    <form
      id="contato"
      onSubmit={handleSubmit}
      className="flex flex-col items-start w-full px-7 min-h-[60vh] lg:pt-24"
    >
      <h2 className="subtitle text-teal w-full border-b-[1px] border-detail1">
        Entre em contato
      </h2>
      <label htmlFor="email">Email</label>
      <input
        id="email"
        name="email"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
          setEmailError(validateEmail(e.target.value));
        }}
        className={`text-area ${emailError ? "border-red-500" : ""}`}
      />
      {emailError &&
        <span className="error-msg">
          <MdErrorOutline />
          {emailError}
        </span>}


      <label htmlFor="message" className="mt-4">
        Mensagem
      </label>
      <textarea
        id="message"
        name="message"
        value={message}
        onChange={(e) => {
          setMessage(e.target.value);
          setMessageError(validateMessage(e.target.value));
        }}
        className={`text-area min-h-40 ${messageError ? "border-red-500" : ""}`}
      />
      {messageError &&
        <span className="error-msg">
          <MdErrorOutline />
          {messageError}
        </span>}

      <button
        type="submit"
        disabled={state.submitting}
        className="group flex items-center text-text-primary gap-x-1 pt-5 w-fit mb-12 cursor-pointer"
      >
        <span className="font-medium font-mono border-b-[1px] border-transparent group-hover:border-detail2-90 transition-colors duration-300">
          Enviar
        </span>
        <FaArrowRight className="group-hover:translate-x-2 transition-transform duration-300" />
      </button>
    </form>
  );
}
