import React, { FC, useState } from 'react'
import Header from "../components/Header";
import Categories from '../components/Categories'
import Sort from '../components/Sort'
import PizzaList from '../components/PizzaList'
import pizzas from '../data/pizzas'

export const Home:FC = () => {
    const [pizza, setPizza] = useState(pizzas)
    return (
        <div className="wrapper">
            <Header/>
            <div className="content">
                <div className="container">
                    <div className="content__top">
                        <Categories/>
                        <Sort/>
                    </div>
                    <h2 className="content__title">Все пиццы</h2>
                    <PizzaList items={pizza} />
                </div>
            </div>
        </div>
    );
}