"use client";

import ProductContext from "@/context/ProductContext";
import React, { useContext, useState } from "react";

const NewProduct = () => {
  const { newProduct } = useContext(ProductContext);

  const [product, setProduct] = useState({
    name: "",
    description: "",
    seller: "",
    price: "",
    stock: "",
    category: "",
  });

  const { name, description, seller, price, stock, category } = product;

  const onChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const categories = [
    "Моторное масло",
    "Антифриз",
    "Тормозные колодки",
    "Масляный фильтр",
    "Воздушный фильтр",
    "Щетки стеклоочистителей",
  ];

  const submitHandler = (e) => {
    e.preventDefault();

    newProduct(product);
  };

  return (
    <section className="container max-w-3xl p-6 mx-auto">
      <h1 className="mb-3 text-xl md:text-3xl font-semibold text-black mb-8">
        Добавление товара
      </h1>

      <form onSubmit={submitHandler}>
        <div className="mb-4">
          <label className="block mb-1"> Название </label>
          <input
            type="text"
            className="appearance-none border border-gray-200 bg-gray-100 rounded-md py-2 px-3 hover:border-gray-400 focus:outline-none focus:border-gray-400 w-full"
            placeholder="Введите название товара"
            name="name"
            value={name}
            onChange={onChange}
            required
          />
        </div>

        <div className="mb-4 mt-5">
          <label className="block mb-1"> Описание </label>
          <textarea
            rows="4"
            className="appearance-none border border-gray-200 bg-gray-100 rounded-md py-2 px-3 hover:border-gray-400 focus:outline-none focus:border-gray-400 w-full"
            placeholder="Введите описание товара"
            name="description"
            value={description}
            onChange={onChange}
            required
          ></textarea>
        </div>

        <div className="grid md:grid-cols-2 gap-x-2 mt-5">
          <div className="mb-4">
            <label className="block mb-1"> Стоимость </label>
            <div className="relative">
              <div className="col-span-2">
                <input
                  type="text"
                  className="appearance-none border border-gray-200 bg-gray-100 rounded-md py-2 px-3 hover:border-gray-400 focus:outline-none focus:border-gray-400 w-full"
                  placeholder="0.00 ₽"
                  name="price"
                  value={price}
                  onChange={onChange}
                  required
                />
              </div>
            </div>
          </div>
          <div className="mb-4">
            <label className="block mb-1"> Категория </label>
            <div className="relative">
              <select
                className="block appearance-none border border-gray-200 bg-gray-100 rounded-md py-2 px-3 hover:border-gray-400 focus:outline-none focus:border-gray-400 w-full"
                name="category"
                value={category}
                onChange={onChange}
                required
              >
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
              <i className="absolute inset-y-0 right-0 p-2 text-gray-400">
                <svg
                  width="22"
                  height="22"
                  className="fill-current"
                  viewBox="0 0 20 20"
                >
                  <path d="M7 10l5 5 5-5H7z"></path>
                </svg>
              </i>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-x-2 mt-5">
          <div className="mb-4">
            <label className="block mb-1"> Производитель </label>
            <input
              type="text"
              className="appearance-none border border-gray-200 bg-gray-100 rounded-md py-2 px-3 hover:border-gray-400 focus:outline-none focus:border-gray-400 w-full"
              placeholder="Введите производителя"
              name="seller"
              value={seller}
              onChange={onChange}
              required
            />
          </div>

          <div className="mb-4">
            <label className="block mb-1"> Количество </label>
            <div className="relative">
              <div className="col-span-2">
                <input
                  type="text"
                  className="appearance-none border border-gray-200 bg-gray-100 rounded-md py-2 px-3 hover:border-gray-400 focus:outline-none focus:border-gray-400 w-full"
                  placeholder="0 ед."
                  name="stock"
                  value={stock}
                  onChange={onChange}
                  required
                />
              </div>
            </div>
          </div>
        </div>

        <button
          type="submit"
          className="my-2 px-4 py-2 text-center inline-block text-white bg-blue-600 border border-transparent rounded-md hover:bg-blue-700 w-full"
        >
          Добавить товар
        </button>
      </form>
    </section>
  );
};

export default NewProduct;
