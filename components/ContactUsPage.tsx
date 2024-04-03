import React from "react";

const ContactUsPage = () => {
  return (
    <div>
      <section className="bg-white dark:bg-gray-900">
        <div className="container px-6 py-12 mx-auto">
          <div className="text-center ">
            <p className="font-medium text-blue-500 dark:text-blue-400">
              Contact us
            </p>

            <h1 className="mt-2 text-2xl font-semibold text-gray-800 md:text-3xl dark:text-white">
              We’d love to hear from you
            </h1>

            <p className="mt-3 text-gray-500 dark:text-gray-400">
              Chat to our friendly team.
            </p>
          </div>

          <img
            className="object-cover w-full h-64 mt-10 rounded-lg lg:h-96"
            src="https://images.unsplash.com/photo-1568992688065-536aad8a12f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=100"
            alt=""
          />
        </div>
        <section className="bg-white dark:bg-gray-900">
          <div className="container grid grid-cols-1 gap-10 px-6 py-12 mx-auto lg:grid-cols-3">
            <div>
              <p className="font-medium text-blue-500 dark:text-blue-400">
                Our locations
              </p>

              <h1 className="mt-2 text-2xl font-semibold text-gray-800 md:text-3xl dark:text-white">
                Visit our stores
              </h1>

              <p className="mt-3 text-gray-500 dark:text-gray-400">
                Find us at these locations.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-12 lg:col-span-2 sm:grid-cols-2">
              <div>
                <h2 className="font-medium text-gray-800 dark:text-white">
                  NSW
                </h2>
                <p className="mt-2 text-gray-500 dark:text-gray-400">
                  Suite 312, 451 Pitt Street, Haymarket NSW 2000
                  <br />
                  email: estimator@aldcorporate.com.au
                  <br />
                  phone: 0426 646 795
                </p>
              </div>

              <div>
                <h2 className="font-medium text-gray-800 dark:text-white">
                  SA
                </h2>
                <p className="mt-2 text-gray-500 dark:text-gray-400">
                  6 McLean Street, Beverly SA 5009 <br />
                  email: cavic@aldcorporate.com.au <br />
                  phone: 0451 451 747{" "}
                </p>
              </div>

              <div>
                <h2 className="font-medium text-gray-800 dark:text-white">
                  ACT
                </h2>
                <p className="mt-2 text-gray-500 dark:text-gray-400">
                  Suite 418, 15 Moore Street, Canberra ACT 2601 <br />
                  email: estimatoract@aldcorporate.com.au <br />
                  phone: 0451 548 014{" "}
                </p>
              </div>

              <div>
                <h2 className="font-medium text-gray-800 dark:text-white">
                  VIC
                </h2>
                <p className="mt-2 text-gray-500 dark:text-gray-400">
                  8 Holmwood Road, Tottenham, VIC 3012 <br />
                  email: estimatorvic@aldcorporate.com.au <br />
                  phone: 0426 663 154{" "}
                </p>
              </div>

              <div>
                <h2 className="font-medium text-gray-800 dark:text-white">
                  QLD
                </h2>
                <p className="mt-2 text-gray-500 dark:text-gray-400">
                  189 Musgrave Road, Coopers Plains, QLD 4108 <br />
                  email: estimatorqld@aldcorporate.com.au <br />
                  phone: 0416 841 687{" "}
                </p>
              </div>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
};

export default ContactUsPage;
