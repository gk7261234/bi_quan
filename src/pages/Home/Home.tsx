/* eslint-disable react/display-name */
import React from "react";
import { Button, Select, Input, BackTop } from "antd";
import { ArrowRightOutlined } from "@ant-design/icons";
import { useTranslation } from "react-i18next";
import "./Home.scss";

const { Option } = Select;
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const Home: React.FC<any> = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  return (
    <div className="full-page">
      <div className="item1">
        <div className="index-header">
          <div className="logo" />
          <div className="nav">
            <div>SynDollar</div>
            <div>|</div>
            <div>Earn</div>
            <div>|</div>
            <div>Product</div>
            <div>|</div>
            <div>Faq</div>
            <div>|</div>
            <div>Docs</div>
          </div>
          <div className="btn-group">
            <Button type="primary" size="large" className="btn">
              Conn Wallet
            </Button>
            <Select className="sele" defaultValue="en" onChange={(value) => changeLanguage(value)}>
              <Option value="en">English</Option>
              <Option value="zh">中文</Option>
            </Select>
          </div>
        </div>
        <div className="index-content">
          <div className="title">{t("index.title")}</div>
          <div className="img1" />
          <div className="img2" />
          <div className="img3" />
          <div className="img4" />
          <div className="img5" />
        </div>
        <div className="support-currency">
          <div className="title">Support Currency</div>
          <div className="right-line line-order1" />
          <div className="right-line line-order2" />
          <div className="right-line line-order3" />
          <div className="icon-group">
            <div className="icon-item">
              <div className="icon1" />
              <div className="text">USDT</div>
            </div>
            <div className="icon-item">
              <div className="icon2" />
              <div className="text">USDC</div>
            </div>
            <div className="icon-item">
              <div className="icon3" />
              <div className="text">DAI</div>
            </div>
            <div className="icon-item">
              <div className="icon4" />
              <div className="text">TUSD</div>
            </div>
          </div>
          <div className="bottom-line" />
          <div className="icon-group">
            <div className="icon-item">
              <div className="icon5" />
              <div className="text">USDT</div>
            </div>
            <div className="icon-item">
              <div className="icon6" />
              <div className="text">USDC</div>
            </div>
            <div className="icon-item">
              <div className="icon7" />
              <div className="text">HUSD</div>
            </div>
            <div className="icon-item">
              <div className="icon8" />
              <div className="text">PAX</div>
            </div>
          </div>
        </div>
      </div>
      <div className="item2">
        <div className="other">
          <div className="icon-other">
            <div className="icon-item">
              <div className="icon9" />
              <div className="text">
                <div className="middle">ETH</div>
                <div className="small">支持所有以太坊代币（ ERC20, ERC721 代币）</div>
              </div>
            </div>
            <div className="icon-item">
              <div className="icon10" />
              <div className="text">
                <div className="middle">TRX</div>
                <div className="small">支持 TRX, TRC10, TRC20 代币，以及资源管理</div>
              </div>
            </div>
            <div className="icon-item">
              <div className="icon11" />
              <div className="text">
                <div className="middle">LTC</div>
                <div className="small">支持 LTC，以及转账收款</div>
              </div>
            </div>
            <div className="icon-item">
              <div className="icon12" />
              <div className="text">
                <div className="middle">BTC</div>
                <div className="small">支持 USDT OMNI，以及 HD 钱包和隔离见证</div>
              </div>
            </div>
            <div className="icon-item">
              <div className="icon13" />
              <div className="text">
                <div className="middle">KSM</div>
                <div className="small">支持 KSM，质押挖矿以及链上治理</div>
              </div>
            </div>
          </div>
          <div className="icon-other">
            <div className="icon-item">
              <div className="icon14" />
              <div className="text">
                <div className="middle">EOS</div>
                <div className="small">支持 EOS 代币、资源管理、以及投票</div>
              </div>
            </div>
            <div className="icon-item">
              <div className="icon15" />
              <div className="text">
                <div className="middle">ATOM</div>
                <div className="small">支持 ATOM 代币，以及质押挖矿和投票</div>
              </div>
            </div>
            <div className="icon-item">
              <div className="icon16" />
              <div className="text">
                <div className="middle">BCH</div>
                <div className="small">支持 BCH，以及转账收款</div>
              </div>
            </div>
            <div className="icon-item">
              <div className="icon17" />
              <div className="text">
                <div className="middle">DOT</div>
                <div className="small">支持 DOT，质押挖矿以及链上治理</div>
              </div>
            </div>
            <div className="icon-item">
              <div className="icon18" />
              <div className="text">
                <div className="middle">FIL</div>
                <div className="small">支持 FIL，以及转账收款</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="item3">
        <div className="title">Developer Oriented</div>
        <div className="scroll-content">
          <div>
            <div className="left-bar" />
          </div>
          <div className="desc">
            <div className="title">Designed for Developers</div>
            <div className="sub-title">You can put a paragraph of text here</div>
            <div className="btn">
              <Button type="primary" shape="round" icon={<ArrowRightOutlined />} size="large">
                Read the docs
              </Button>
            </div>
          </div>
          <div>
            <div className="code-img" />
          </div>
          <div>
            <div className="right-bar" />
          </div>
        </div>
      </div>
      <div className="item4">
        <div className="partner">
          <div className="title">partner</div>
          <div className="logo-group">
            <div className="logo-item">
              <div className="logo1" />
            </div>
            <div className="logo-item">
              <div className="logo2" />
            </div>
            <div className="logo-item">
              <div className="logo3" />
            </div>
          </div>
          <div className="logo-group">
            <div className="logo-item">
              <div className="logo4" />
            </div>
            <div className="logo-item">
              <div className="logo5" />
            </div>
            <div className="logo-item">
              <div className="logo6" />
            </div>
          </div>
        </div>
      </div>
      <div className="index-footer">
        <div className="base-info">
          <div>
            <div className="logo" />
            <div className="text">subscribe to our monthly roundup</div>
            <div className="btn-group">
              <Input placeholder="Email address" style={{ background: "#29292B", marginRight: "10px" }} />
              <Button type="primary">Submit</Button>
            </div>
          </div>
          <div>
            <div className="title">RESOURCES</div>
            <div className="text">Get Started</div>
            <div className="text">Learn</div>
            <div className="text">Case Studies</div>
          </div>
          <div>
            <div className="title">TOOLS</div>
            <div className="text">Account Viewer</div>
            <div className="text">Laboratory</div>
            <div className="text">Dashboard</div>
            <div className="text">Ledger Explorer</div>
            <div className="text">All Tools</div>
          </div>
          <div>
            <div className="title">LUMENS</div>
            <div className="text">Stellar Lumens</div>
            <div className="text">Exchanges</div>
            <div className="text">Wallets</div>
          </div>
          <div>
            <div className="title">COMMUNITY</div>
            <div className="text">Community</div>
            <div className="text">Projects</div>
            <div className="text">Events</div>
            <div className="text">Podcast</div>
            <div className="text">FAQ</div>
          </div>
        </div>
        <div className="trademark">© 2020—2021 SynDollar Development Foundation</div>
        <BackTop />
      </div>
    </div>
  );
};
export default Home;
