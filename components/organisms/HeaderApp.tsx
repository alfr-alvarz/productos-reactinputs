import React, {useState} from "react";
import { Menu } from "antd";
import type { MenuProps } from 'antd';

const items: MenuProps['items'] = [
  {
    label: (
        <a href="/">
            Ver Productos
        </a>),
    key: 'ver',
  },
  {
    label: (
        <a href="/agregar">
            Agregar Productos
        </a>),
    key: 'add',
  },
  {
    label: (
        <a href="/actualizar">
            Editar Productos
        </a>),
    key: 'actualizar',
  },
  {
    label: (
      <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
        Navigation Four - Link
      </a>
    ),
    key: 'alipay',
  },
];

const HeaderApp: React.FC = () => {

    const [current, setCurrent] = useState('ver');

    const onClick: MenuProps['onClick'] = e => {
    console.log('click ', e);
    setCurrent(e.key);
    };

    return <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />;
}

export default HeaderApp;