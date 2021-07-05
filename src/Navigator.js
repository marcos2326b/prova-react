import React from 'react'
import { createAppContainer } from 'react-navigation'
import { createDrawerNavigator } from 'react-navigation-drawer'

import Dashboard from './Screens/Dashboard'
import DefaultCards from './Screens/Default cards'
import PricingTables from './Screens/Pricing tables'
import Contentblocks from './Screens/Content blocks'
import Forms from './Screens/Forms'
import Menu from './Components/Menu'

const menuConfig = {
    initialRouteName: "Dashboard",
    contentComponent: Menu,
    contentOptions: {
        labelStyles: {
            fontWeight: "normal",
            fontSize: 20,
        },
        activeLabelStyle: {
            color: "blue",
            fontWeight: "bold",
        },
    },
};

const menuRoutes = {
    Dashboard,
    'Default Cards':{
        screen:DefaultCards
    },
    'Pricing Tables':{
        screen:PricingTables
    },
    'Content Blocks':{
        screen:Contentblocks
    },
    'Forms':{
        screen:Forms
    },
}

const menuNavigator = createDrawerNavigator(menuRoutes,menuConfig)
export default createAppContainer(menuNavigator)













