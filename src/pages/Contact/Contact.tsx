import { Suspense, useState } from "react";
import emailjs from "@emailjs/browser";
import Fox from "../../components/models/Fox";
import { Canvas } from "@react-three/fiber";
import { useToast } from "../../components/Toast";
import Loader from "../../components/Loader";

const Contact = () => {
  const inputClass =
    "w-full border border-gray-300 rounded-md text-xs py-2 px-2 placeholder:text-gray-400";

  const toast = useToast();

  const [loading, setLoading] = useState(false);

  const [currentAnimation, setCurrentAnimation] = useState("idle");

  const [formData, setFormData] = useState<{
    name: string;
    email: string;
    message: string;
  }>({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>,
    prop: string
  ) => {
    const value = e.target!.value;
    setFormData({
      ...formData,
      [prop]: value,
    });
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (loading) {
      return;
    }
    setCurrentAnimation("hit");
    setLoading(true);
    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          to_name: "JavaScript Mastery",
          from_email: formData.email,
          to_email: "sujata@jsmastery.pro",
          message: formData.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          setFormData({
            name: "",
            email: "",
            message: "",
          });
        },
        () => {
          setLoading(false);
          toast.show("请稍后再试！");
          setTimeout(() => {
            toast.close();
          }, 2000);
        }
      );
  };

  const onFocus = () => {
    setCurrentAnimation("walk");
  };

  const onBlur = () => {
    setCurrentAnimation("idle");
  };

  return (
    <>
      <h1 className="text-5xl font-bold pt-4 ">Get in Touch</h1>
      <div className="flex justify-between sm:flex-row flex-col overflow-hidden">
        <form className="flex-1" onSubmit={onSubmit}>
          <label className="pt-4">
            <p className="pb-2 pt-4">Name</p>
            <input
              required
              value={formData.name}
              placeholder="name"
              onFocus={onFocus}
              onBlur={onBlur}
              className={inputClass}
              onChange={(e) => handleChange(e, "name")}
            />
          </label>
          <label>
            <p className="pb-2 pt-4">Email</p>
            <input
              type="email"
              required
              value={formData.email}
              placeholder="John@163.com"
              className={inputClass}
              onFocus={onFocus}
              onBlur={onBlur}
              onChange={(e) => handleChange(e, "email")}
            />
          </label>
          <label>
            <p className="pb-2 pt-4">Your Message</p>
            <textarea
              value={formData.message}
              rows={4}
              placeholder="Your Message"
              className={inputClass}
              onFocus={onFocus}
              onBlur={onBlur}
              onChange={(e) => handleChange(e, "message")}
            />
          </label>

          <button
            type="submit"
            className="mt-10 w-full bg-gradient-to-r from-cyan-500 to-blue-500  py-2 rounded-md px-[20px]
            text-white text-sm"
          >
            Submit
          </button>
        </form>
        <div className="relative translate-y-[-17%] flex-1 overflow-hidden lg:h-[600px] md:h-[550px] h-[450px]">
          <Canvas
            camera={{
              position: [0, 0, 5],
              fov: 75,
              near: 0.1,
              far: 1000,
            }}
          >
            <Suspense fallback={<Loader />}>
              <directionalLight position={[0, 0, 1]} intensity={2.5} />
              <ambientLight intensity={1} />
              <pointLight position={[5, 10, 0]} intensity={2} />
              <spotLight
                position={[10, 10, 10]}
                angle={0.15}
                penumbra={1}
                intensity={2}
              />
              <Fox currentAnimation={currentAnimation} />
            </Suspense>
          </Canvas>
        </div>
      </div>
    </>
  );
};

export default Contact;
