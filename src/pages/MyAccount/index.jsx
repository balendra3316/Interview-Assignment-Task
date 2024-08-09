import { Layout } from "../../components/Layout";
import "./styles.css";

function MyAccount() {
  return (
    <>
      <Layout>
        <p className=" m-4">My Account</p>
        <div className="flex flex-col items-center justify-center w-2/4 h-3/4 border border-black rounded-lg MyAccount p-8">
          <figure className=" flex items-center justify-center flex-col">
            <p className="mb-5 mt-5 font-medium">Created by:</p>

            <img
              src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkG
              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"
              alt="Balendra"
              className="border border-slate-950 rounded-full"
            />

            <p className="font-bold mt-2 mb-2">
              Balendra Singh Parihar <br></br>
              6263972688  <br></br>
              vinay626397@gmail.com
            </p>
            <a
              href="https://github.com"
              className=" font-light  underline"
            >
              
            </a>
          </figure>
        </div>
      </Layout>
    </>
  );
}

export default MyAccount;
