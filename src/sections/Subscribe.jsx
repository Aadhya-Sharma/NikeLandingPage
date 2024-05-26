import Button from "../components/Button"
const Subscribe = () => {
  return (
    <section  id="contact-us" className="max-container flex sm:justify-between items-center flex-col gap-10">
      <h3 className="font-bold text-4xl font-palanquin leading-[68px] ">Sign Up for
        <span className="text-coral-red"> Updates </span> 
         & Newsletter
      </h3>
      <div className="sm:max-w-[80%] w-full flex flex-col gap-5 justify-center items-center sm:flex-row  p-2.5 sm:border sm:border-slate-100 sm:shadow-md sm:rounded-full">
          <input type="text" placeholder="Subcribe@like.com" className="outline-none border border-slate-100 shadow-md rounded-full p-5 w-full sm:input sm:border-none sm:shadow-none"/>   
          <Button label="Sign Up" className="flex items-center justify-center max-sm:justify-end  max-sm:w-full"/>     
      </div>
    </section>
  )
}

export default Subscribe