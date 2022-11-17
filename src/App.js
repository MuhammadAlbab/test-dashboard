import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Dashboard from "./assets/dashboard.svg";
import Wallet from "./assets/wallet-line.svg";
import Exchange from "./assets/exchange.svg";
import Bag from "./assets/shopping-bag.svg";
import Org from "./assets/organization.svg";
import Logout from "./assets/logout.svg";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Grid } from "@mui/material";
import ArrowRed from "./assets/arrow-right-down-line.svg";
import ArrowGreen from "./assets/arrow-right-up-line.svg";
import ArrowYellow from "./assets/arrow-right-line.svg";
import MaxLogo from "./assets/pr-max.png";
import TselLogo from "./assets/pr-tsel.png";
import ThreeLogo from "./assets/pr-three.png";
import OvoLogo from "./assets/pr-ovo.png";
import PlnLogo from "./assets/pr-pln.png";
import User1 from "./assets/usernpic.png";
import User2 from "./assets/usernpic-1.png";
import User3 from "./assets/usernpic-2.png";
import User4 from "./assets/usernpic-3.png";
import User5 from "./assets/usernpic-4.png";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Avatar from "./assets/avatar.png";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  LineElement,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  Filler,
} from "chart.js";
ChartJS.register(
  Title,
  Tooltip,
  LineElement,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  Filler
);

const drawerWidth = 280;

let SideList = [
  {
    name: "Dashboard",
    icon: <img src={Dashboard} alt="dashboard" />,
    children: [],
    childrenState: false,
  },
  {
    name: "Balance",
    icon: <img src={Wallet} alt="balance" />,
    children: [],
    childrenState: false,
  },
  {
    name: "Transaction",
    icon: <img src={Exchange} alt="trans" />,
    children: [],
    childrenState: false,
  },
  {
    name: "Product",
    icon: <img src={Bag} alt="prod" />,
    children: [],
    childrenState: false,
  },
  {
    name: "Channel",
    icon: <img src={Org} alt="channel" />,
    children: [],
    childrenState: false,
  },
];

let productArr = [
  {
    name: "Maxim",
    logoRef: MaxLogo,
    amount: "150.000",
    trans: "120",
  },
  {
    name: "Telkomsel",
    logoRef: TselLogo,
    amount: "150.000",
    trans: "120",
  },
  {
    name: "Three",
    logoRef: ThreeLogo,
    amount: "150.000",
    trans: "120",
  },
  {
    name: "OVO",
    logoRef: OvoLogo,
    amount: "150.000",
    trans: "120",
  },
  {
    name: "PLN Postpaid",
    logoRef: PlnLogo,
    amount: "150.000",
    trans: "120",
  },
];

let agentArr = [
  {
    name: "PT Suka Maju Jakarta",
    logoRef: User1,
    profit: "3.700.000",
    sales: "3.700.000",
    trans: "120",
  },
  {
    name: "Susi Susanti",
    logoRef: User2,
    profit: "3.700.000",
    sales: "3.700.000",
    trans: "120",
  },
  {
    name: "Toko Pulsa III Depok",
    logoRef: User3,
    profit: "3.700.000",
    sales: "3.700.000",
    trans: "120",
  },
  {
    name: "PT Suka Maju Bogor",
    logoRef: User4,
    profit: "3.700.000",
    sales: "3.700.000",
    trans: "120",
  },
  {
    name: "Anton Antoman",
    logoRef: User5,
    profit: "3.700.000",
    sales: "3.700.000",
    trans: "120",
  },
];

function App(props) {
  const [data] = useState({
    labels: ["04 Apr 22", "06 Apr 22", "08 Apr 22", "10 Apr 22"],
    datasets: [
      {
        label: "Sales",
        data: [3500000, 4000000, 3000000, 5000000],
        borderColor: "#545DFF",
        tension: 0.4,
        fill: true,
        pointStyle: "rect",
        pointBorderColor: "blue",
        pointBackgroundColor: "#fff",
        showLine: true,
      },
    ],
  });
  const options = {
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      y: {
        suggestedMin: 2000000,
        suggestedMax: 8000000,
      },
    },
  };

  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const downMd = useMediaQuery(theme.breakpoints.down("md"));

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <div className="text-purple-primary font-w-700 font-30 text-a-center py-40">
        SalesDash
      </div>
      <div>
        {SideList.map((e) => (
          <ListItemButton
            key={e.name}
            sx={{
              paddingX: "45px",
              marginBottom: "20px",
              borderRight:
                e.name === "Dashboard"
                  ? "4px solid var(--color-purple-primary)"
                  : "",
            }}
          >
            <ListItemIcon
              sx={{ minWidth: "28px" }}
              className={e.name === "Dashboard" ? "color-purple-primary" : ""}
            >
              {e.icon}
            </ListItemIcon>
            <div
              className={
                e.name === "Dashboard"
                  ? "ml-16 font-18 text-purple-primary font-w-700"
                  : "ml-16 font-18 font-w-600"
              }
            >
              {e.name}
            </div>
          </ListItemButton>
        ))}
      </div>
      <Divider />
      <ListItemButton sx={{ marginY: "20px", paddingX: "45px" }}>
        <ListItemIcon sx={{ minWidth: "28px" }}>
          <img src={Logout} alt="logout" />
        </ListItemIcon>
        <div className="ml-16 font-18 font-w-600">Logout</div>
      </ListItemButton>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { md: `calc(100% - ${drawerWidth}px)` },
          ml: { md: `${drawerWidth}px` },
          backgroundColor: "var(--color-purple-primary)",
        }}
      >
        <Toolbar sx={{ display: { md: "none" } }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { md: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            SalesDash
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { md: drawerWidth }, flexShrink: { md: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { sm: "block", md: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "none", md: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      {/* content */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,

          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        {downMd ? <Toolbar /> : null}
        <Grid container>
          <Grid item sx={{ padding: "24px" }} md={9} sm={12} xs={12}>
            <div className="font-w-700">
              <div className="font-30">Dashboard</div>
              <div className="font-18 text-gray">
                Today’s date: Sun, 10 April 2022
              </div>
            </div>
            {/* main highlight */}
            <div className="my-16">
              <Grid container spacing={2}>
                <Grid item lg={4} md={12} sx={{ width: "100%" }}>
                  <div className="card-container font-w-700 flex flex--d-column full-width">
                    <div className="text-gray font-16 ">Profit</div>
                    <div className="font-30">Rp 11.500.000</div>
                    <div
                      className="flex items-center font-14 mt-8 ml-auto"
                      style={{ color: "#E94948" }}
                    >
                      <img src={ArrowRed} alt="arrow-red" />
                      <div className="ml-8">0.3% compared to 7 days ago</div>
                    </div>
                  </div>
                </Grid>
                <Grid item lg={4} md={12} sx={{ width: "100%" }}>
                  <div className="card-container font-w-700 flex flex--d-column full-width">
                    <div className="text-gray font-16 ">Sales</div>
                    <div className="font-30">Rp 56.000.000</div>
                    <div
                      className="flex items-center font-14 mt-8 ml-auto"
                      style={{ color: "#36D189" }}
                    >
                      <img src={ArrowGreen} alt="arrow-red" />
                      <div className="ml-8">0.3% compared to 7 days ago</div>
                    </div>
                  </div>
                </Grid>
                <Grid item lg={4} md={12} sx={{ width: "100%" }}>
                  <div className="card-container font-w-700 flex flex--d-column full-width">
                    <div className="text-gray font-16 ">Transaction</div>
                    <div className="font-30">
                      1.090 <span className="font-18">transactions</span>
                    </div>
                    <div
                      className="flex items-center font-14 mt-8 ml-auto"
                      style={{ color: "#FFDC7D" }}
                    >
                      <img src={ArrowYellow} alt="arrow-red" />
                      <div className="ml-8">0.3% compared to 7 days ago</div>
                    </div>
                  </div>
                </Grid>
              </Grid>
            </div>
            {/* chart & product || agents*/}
            <div className="my-16">
              <Grid container spacing={2}>
                <Grid item lg={8} md={12} sm={12}>
                  <div>
                    <div className="card-container my-10">
                      <div className="font-16 font-w-700 text-gray my-16">
                        Sales Chart
                      </div>
                      <Line data={data} options={options} />
                    </div>
                    <div className="card-container my-10 p-24">
                      <div className="font-16 font-w-700 text-gray my-16">
                        Top 5 Products
                      </div>
                      <Grid container spacing={2}>
                        {productArr.map((e) => (
                          <Grid
                            key={e.name}
                            item
                            lg={2.4}
                            md={6}
                            sm={6}
                            xs={12}
                          >
                            <div
                              className="card-container py-16 px-10 flex flex--d-column justify-center items-center font-w-700 text-a-center"
                              style={{
                                border: "2px solid var(--color-purple-primary)",
                              }}
                            >
                              <div style={{ width: "54px", height: "54px" }}>
                                <img
                                  src={e.logoRef}
                                  alt={e.name}
                                  style={{ maxWidth: "100%" }}
                                />
                              </div>
                              <div className="font-16 text-purple-primary mt-12 mb-4">
                                {e.name}
                              </div>
                              <div className="font-14 text-gray">
                                {e.amount}
                              </div>
                              <div className="font-16">
                                {e.trans}{" "}
                                <span className="font-14">transactions</span>
                              </div>
                            </div>
                          </Grid>
                        ))}
                      </Grid>
                    </div>
                  </div>
                </Grid>
                <Grid item lg={4} md={12} sm={12}>
                  <div className="card-container my-10">
                    <div className="font-16 font-w-700 text-gray mt-16 mb-30">
                      Top 5 Agents
                    </div>
                    <Grid container spacing={2}>
                      {agentArr.map((e) => (
                        <Grid
                          key={e.name}
                          item
                          md={12}
                          sm={6}
                          xs={6}
                          style={{ width: "100%" }}
                        >
                          <div className="mb-24">
                            <Grid
                              container
                              spacing={2}
                              alignItems={"center"}
                              justifyContent={"center"}
                            >
                              <Grid item md={4}>
                                <div className="full-width">
                                  <img
                                    src={e.logoRef}
                                    alt={e.name}
                                    style={{ width: "100%" }}
                                  />
                                </div>
                              </Grid>
                              <Grid item md={8} style={{ width: "100%" }}>
                                <div className="full-width">
                                  <div className="font-w-700">
                                    <div className="font-16 text-purple-primary">
                                      {e.name}
                                    </div>
                                    <div className="font-14 flex items-start justify-between">
                                      <div className="font-w-600 text-gray">
                                        Profit
                                      </div>
                                      <div>Rp {e.profit}</div>
                                    </div>
                                    <div className="font-14 flex items-start justify-between">
                                      <div className="font-w-600 text-gray">
                                        Profit
                                      </div>
                                      <div>Rp {e.profit}</div>
                                    </div>
                                    <div className="font-14 flex items-start justify-between">
                                      <div className="font-w-600 text-gray">
                                        Profit
                                      </div>
                                      <div>Rp {e.profit}</div>
                                    </div>
                                  </div>
                                </div>
                              </Grid>
                            </Grid>
                          </div>
                        </Grid>
                      ))}
                    </Grid>
                  </div>
                </Grid>
              </Grid>
            </div>
          </Grid>
          <Grid
            item
            sx={{ padding: "24px 12px", backgroundColor: "#F3F4FF" }}
            md={3}
            sm={12}
            xs={12}
          >
            <div className="flex justify-center items-center full-width p-16 mb-24">
              <img src={Avatar} alt="avatar" />
              <div className="font-w-700 mx-6">
                <div className="font-16">Budi Budiman</div>
                <div className="font-14 text-gray">Owner at PT Suka Maju</div>
              </div>
              <KeyboardArrowDownIcon />
            </div>
            <div className="card-container font-w-700 text-a-center">
              <div className="text-gray font-18">Total balance</div>
              <div className="font-24 my-24 ">Rp 1.580.000.000</div>
              <button
                className="mb-12 font-18 font-w-700 radius-12 bg-purple-primary pointer"
                style={{
                  color: "white",
                  border: "none",
                  padding: "12px 0",
                  width: "100%",
                }}
              >
                Top up
              </button>
            </div>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

export default App;
