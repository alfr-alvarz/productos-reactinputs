import React from "react";
import { Layout } from "antd";
import HeaderApp from "components/organisms/HeaderApp";
import TablaProductos from "components/organisms/TablaProductos";

const ProductosLayout: React.FC = () => {
    return (
        <Layout>
            <HeaderApp/>
            <TablaProductos/>
        </Layout>
    )
}

export default ProductosLayout;