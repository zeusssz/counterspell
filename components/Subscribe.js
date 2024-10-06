import { useState } from "react";

export default function Subscribe() {
  const [submitBtn, setSubmitBtn] = useState("Sign up");

  return (
    <form
      method="post"
      action="https://app.loops.so/api/newsletter-form/clo3frr4v02f3jv0qqu6hgfqs"
      className="flex flex-col space-y-4 text-2xl retro sm:text-3xl lg:flex-row lg:space-y-0"
      onSubmit={handleSubmit}
    >
      <input
        type="email"
        name="email"
        className="outline-none border-4 lg:border-r-0 border-pink bg-transparent border-dashed px-4 h-16 sm:h-20 lg:w-[500px] w-full"
        placeholder="fiona@hackclub.com"
        required
      />
      <input type="hidden" name="userGroup" value="Hack Clubber" />
      <input
        type="hidden"
        name="mailingLists"
        value="cm1fqxdc900qn0ll9fd5m3wdv"
      />
      <button
        type="submit"
        className="h-16 px-4 uppercase border-4 bg-pink sm:h-20 border-pink"
        id="formSubmit"
      >
        {submitBtn}
      </button>
    </form>
  );

  function handleSubmit(e) {
    e.preventDefault();
    const form = e.target;

    fetch(form.action, {
      method: "POST",
      body: new URLSearchParams(new FormData(form)),
    })
      .then((response) => {
        if (response.ok) {
          form.reset();
          setSubmitBtn("Success");
        } else {
          setSubmitBtn("Error");
        }
      })
      .catch((error) => {
        setSubmitBtn("Error");
      });
  }
}
