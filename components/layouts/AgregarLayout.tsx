import React from "react";
import { Layout } from "antd";
import HeaderApp from "components/organisms/HeaderApp";
import FormAgregar from "components/organisms/FormAgregar";

const AgregarLayout: React.FC = () => {
    return (
        <Layout>
            <HeaderApp/>
            <FormAgregar />
        </Layout>
    )
}

export default AgregarLayout;