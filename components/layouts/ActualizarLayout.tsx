import React from "react";
import { Layout } from "antd";
import HeaderApp from "components/organisms/HeaderApp";
import DropdownProductos from "components/molecules/DropdownProductos";
import FormActualizar from "components/organisms/FormActualizar";

const ActualizarLayout: React.FC = () => {
    return (
        <Layout>
            <HeaderApp/>
            <DropdownProductos/>
            <FormActualizar/>
        </Layout>
    )
}

export default ActualizarLayout;