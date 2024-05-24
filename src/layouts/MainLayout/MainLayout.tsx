import React, { ReactNode } from "react";
import Layout, { Content, Footer, Header } from "antd/es/layout/layout";
import MainHeader from "../../components/MainHeader/MainHeader";

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <Layout style={{ height: "100vh" }}>
      <MainHeader />
      <Content style={{ height: "calc(100% - 128px)" }}>{children}</Content>
      <Footer style={{ textAlign: "center", color: "#fff" }}>
        Thank you for checking my website
      </Footer>
    </Layout>
  );
};

export default MainLayout;
