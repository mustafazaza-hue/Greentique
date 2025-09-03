import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { Link } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import cardPlaceHolder from "../../assets/review-author.png";
import { useContext, useEffect, useState } from "react";
import { API_CONFIG } from "../../Pages/config";
import { apiClient } from "../../Pages/services/apiClient";
import Loading from "../Loading/Loading";
import { CategoriesContext } from "../context/CategoriesContext";

export default function HomeCategories() {
  const {categories, isLoading}=useContext(CategoriesContext)



        if (isLoading) {
        return <Loading />;
      }
  return (
    <>
      <section>
        <div className="container">
          <div className="flex items-center justify-between *:flex *:items-center *:justify-center *:gap-2">
            <h2 className="text-2xl font-bold">Shop by category</h2>
            <Link className="text-[var(--color-btn-dark)]" to={"/categories"}>
              <span>View all categories</span>
              <FontAwesomeIcon icon={faArrowRight} />
            </Link>
          </div>
          <div className="py-8 gap-3 grid md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6">
            {categories.map((category) => (
              <Link key={category._id} to={`/category/${category._id}`} className="card  cursor-pointer flex flex-col items-center justify-center p-4 rounded-xl hover:shadow-xl transition-all duration-150 shadow-md bg-white">
                <img
                  className="size-16 rounded-full object-cover"
                  src={category.image}
                  alt=""
                />
                <h3>{category.name}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
