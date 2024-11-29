import SignIn from "../components/SignIn";
import plantImage from "../client/assets/pexels-nadiye-odabasi-3668408-24964908.jpg"

function SignInPage() {
  return (
    <main className="relative isolate px-6 pt-6 lg:px-8 min-h-[100vh] flex items-center">
      <section className="flex w-full h-full items-center justify-center">
        <div className="flex w-[90%] max-w-7xl shadow-lg bg-white overflow-hidden rounded-lg h-[90vh]">
          <div className="w-2/5 p-8 bg-gray-50 flex items-center">
            <SignIn />
          </div>
          <div className="w-3/5 h-full">
            <img
              className="w-full h-full object-cover"
              src={plantImage} 
              alt="Beautiful plant"
            />
          </div>
        </div>
      </section>
    </main>
  );
}

export default SignInPage; 