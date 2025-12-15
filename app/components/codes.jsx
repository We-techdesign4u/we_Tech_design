import React from "react";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendContactEmail(formData) {
  // Get values safely
  const firstName = formData.get("firstName")?.trim() || "";
  const lastName = formData.get("lastName")?.trim() || "";
  const company = formData.get("company")?.trim() || "";
  const email = formData.get("email")?.trim() || "";
  const message = formData.get("message")?.trim() || "";

  // Basic validation
  if (!firstName || !email || !message) {
    return { success: false, error: "Please fill in all required fields." };
  }

  try {
    await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: ["your-email@gmail.com"], // ← CHANGE TO YOUR GMAIL
      replyTo: email,
      subject: `New message from ${firstName} ${lastName}`,
      text: `
Name: ${firstName} ${lastName}
Company: ${company || "Not provided"}
Email: ${email}

Message:
${message}
      `.trim(),
    });

    return { success: true };
  } catch (error) {
    console.error("Resend error:", error);
    return {
      success: false,
      error: "Failed to send message. Try again later.",
    };
  }
}
const codes = () => {
  const [state, formAction, pending] = useActionState(sendContactEmail, null);
  useEffect(() => {
    if (state?.success) {
      // You could reset the form here if desired
      // document.querySelector('form')?.reset();
    }
  }, [state]);
  return (
    <div className=" w-full bg-gray-100 rounded-[35px]">
      <form action={formAction} className="p-[20px]">
        <div className="sm:flex ">
          <div className="sm:w-[50%]">
            <Formfield
              id="firstName"
              type="text"
              placeholder="John"
              title="First Name"
              fieldtype="singleline"
            />
          </div>
          <div className="sm:w-[50%]">
            <Formfield
              id="lastName"
              type="text"
              placeholder="Doe"
              title="Last Name"
              fieldtype="singleline"
            />
          </div>
        </div>

        <Formfield
          type="text"
          id="companyName"
          placeholder="Acme Corp"
          title="Company Name"
          fieldtype="singleline"
        />

        <Formfield
          id="email"
          type="text"
          placeholder="JohnDoe@email.com"
          title="Email Address"
          fieldtype="singleline"
        />
        <Formfield
          id="message"
          type="text"
          placeholder="Write your message here"
          title="Message"
          multiple={true}
          fieldtype="multiline"
        />
        <div className="px-5">
          <p className="text-[14px] font-interV text-gray-600">
            By clicking on submit, you aggree to send a message to the owner of
            this website and will respond via your email as listed above
          </p>
          <div className=" ">
            <GDButton
              type={"submit"}
              disable={pending}
              withicon={"true"}
              title={pending ? "Sending..." : "Send Message"}
              icon={<AiOutlineArrowRight />}
            />
          </div>
        </div>
        {state?.success && (
          <p className="text-green-600 font-medium">
            Message sent successfully! I'll get back to you soon.
          </p>
        )}
        {state?.error && (
          <p className="text-red-600 font-medium">{state.error}</p>
        )}
      </form>
    </div>
  );
};

export default codes;
