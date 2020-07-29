import React from 'react'
import styles from './burger.module.css'
import BurgerIngredients from './Burger Ingredients/burger_ingredients'

const burger = (props) => {

    return(

        <div className = {styles.Burger}>
            <BurgerIngredients type = 'bread-top'/>
            <BurgerIngredients type = 'cheese'/>
            <BurgerIngredients type = 'meat'/>
            <BurgerIngredients type = 'salad'/>
            <BurgerIngredients type = 'bacon'/>
            <BurgerIngredients type = 'bread-bottom'/>
        </div>



    );
}
export default burger;