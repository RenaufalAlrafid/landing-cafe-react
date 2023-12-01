/* eslint-disable no-unused-vars */
import React from 'react';
import MenuCard from './MenuCard'

export default function () {
  return (
    <div className='flex gap-20 w-full  snap-mandatory pb-20 overflow-y-scroll no-scrollbar overflow-scroll' >
        <div className='w-0'></div>
        <MenuCard img='menu1.png' title='Pancake' price={8}></MenuCard>
        <MenuCard img='menu2.png' title='Burger' price={8}></MenuCard>
        <MenuCard img='menu3.png' title='Espresso' price={7}></MenuCard>
        <MenuCard img='menu4.png' title='Americano' price={8}></MenuCard>
        <MenuCard img='menu1.png' title='Pancake' price={8}></MenuCard>
        <MenuCard img='menu2.png' title='Burger' price={8}></MenuCard>
        <MenuCard img='menu3.png' title='Espresso' price={7}></MenuCard>
        <MenuCard img='menu4.png' title='Americano' price={8}></MenuCard>
        <MenuCard img='menu1.png' title='Pancake' price={8}></MenuCard>
    </div>
  )
}
