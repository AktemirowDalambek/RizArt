import React, { useState, useRef, useEffect } from 'react';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const [timer, setTimer] = useState(0);
  const [messageSent, setMessageSent] = useState(false);
  const form = useRef();

  const serviceID = 'service_wpdde7k';
  const templateID = 'template_uk4a80e';

  emailjs.init('Tj7fZ94WRKla9FfN0');

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(serviceID, templateID, form.current)
      .then(
        () => {
          setMessageSent(true);

          setTimeout(() => {
            setMessageSent(false);
          }, 5000);

          setIsButtonDisabled(true);
          setTimer(15); 
        },
        (error) => {
          console.log('FAILED...', error.text);
        }
      );
  };

  useEffect(() => {
    let interval;
    if (timer > 0) {
      interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
    } else if (timer === 0) {
      setIsButtonDisabled(false);
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [timer]);

  return (
    <div className="relative px-12 py-4 border-b border-cyan-700">
      <h2 className="mb-8 text-center text-[24px] font-semibold">
        Остались вопросы? Напишите нам
      </h2>
      <form
        ref={form}
        onSubmit={sendEmail}
        className="grid grid-cols-2 gap-8 max-md:flex max-md:flex-col"
      >
        <input
          type="text"
          placeholder="Ваше имя"
          name="user_name"
          className="row-start-1 px-4 py-2 rounded-md outline-none border border-black"
        />
        <input
          type="email"
          placeholder="Ваш email"
          name="user_email"
          className="row-start-2 px-4 py-2 rounded-md outline-none border border-black"
        />
        <textarea
          placeholder="Сообщение"
          name="message"
          className="row-start-1 row-end-3 resize-none px-4 py-2 outline-none rounded-md border border-black"
        />
        <label className="flex items-center gap-4 col-span-2" htmlFor="check">
          <input
            type="checkbox"
            className="w-[20px] h-[20px]"
            id="check"
            checked={isChecked}
            onChange={(e) => setIsChecked(e.target.checked)}
          />
          <span>Согласие на обработку информации</span>
          <a href="/path/to/privacy-policy.pdf" target="_blank" className="text-blue-500 underline">
            Политика конфиденциальности
          </a>
        </label>
        <button
          type="submit"
          className={`text-white font-semibold px-4 py-2 rounded-md ${
            isChecked && !isButtonDisabled ? 'bg-orange-500 hover:bg-orange-600' : 'bg-orange-300 cursor-not-allowed'
          }`}
          disabled={!isChecked || isButtonDisabled}
        >
          {isButtonDisabled ? `Подождите ${timer} сек` : 'Отправить'}
        </button>
      </form>
      {messageSent && (
        <div className="fixed top-0 left-0 w-full p-4 bg-green-500 text-white text-center z-50">
          Ваше письмо отправлено!
        </div>
      )}
    </div>
  );
};

export default ContactForm;
