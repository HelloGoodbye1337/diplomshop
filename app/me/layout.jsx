import Sidebar from "@/components/layouts/Sidebar";

export default function UserLayout({ children }) {
  return (
    <>
      <section className="py-2 sm:py-1 bg-blue-600 text-white">
        <div className="container max-w-screen-xl mx-auto px-4">
          <h1 className="">Меню пользователя</h1>
        </div>
      </section>

      <section className="py-10">
        <div className="container max-w-screen-xl mx-auto px-4">
          <div className="flex flex-col md:flex-row -mx-4">
            <Sidebar />
            <main className="md:w-2/3 lg:w-3/4 px-4">
              <article className="border border-gray-200 bg-white shadow-sm rounded mb-5 p-3 lg:p-5">
                {children}
              </article>
            </main>
          </div>
        </div>
      </section>
    </>
  );
}
