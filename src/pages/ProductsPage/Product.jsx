import React from "react";
import Main from "../../containers/Main/Main";
import HeaderTop from "../../components/HeaderTop";
import ProductFilter from '../../components/productFilter/Index'


const Index = () => {
    return (
        <>
            <HeaderTop />
            <ProductFilter />
            <Main />
        </>

    )
}


export default Index;