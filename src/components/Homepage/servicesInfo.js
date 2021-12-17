import BusinessIcon from '@mui/icons-material/Business';
import BalanceIcon from '@mui/icons-material/Balance';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';
import InterpreterModeIcon from '@mui/icons-material/InterpreterMode';
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';

const services = [
  {
    id: "1",
    title: "Legal", 
    desc: "Provide legal services for foreign talents and start-ups looking to establish their business in China",
    details: "Consulting | Contract service | Immigration and visa service | Company registration | Foreign investment | Intellectual property | Government Affair",
    icon: <BalanceIcon 
      color="secondary" 
      sx={{ 
        height: "4rem", 
        width: "auto" }} 
    />
  },
  {
    id: "2",
    title: "Marketing", 
    desc: "Increase brand awareness, find and reach the right potential customers, and maximize your results",
    details: "Brand Strategy | Social Media | Content Marketing | Display & Video Marketing | Cinema and Movie Theater Advertising",
    icon: <ConnectWithoutContactIcon 
      color="secondary" 
      sx={{ 
        height: "4rem", 
        width: "auto" }} 
    />
  },
  {
    id: "3",
    title: "Media", 
    desc: "Help to build relationships with regional and national media and provide media coverage",
    details: "Conferences | Press Releases | Interviews | Product Launches & Special Announcements | Events Amplificationss",
    icon: <InterpreterModeIcon 
      color="secondary" 
      sx={{ 
        height: "4rem", 
        width: "auto" }} 
    />
  },
  {
    id: "4",
    title: "Financial", 
    desc: "Find opportunities, including funding venture capitalists, angel investors, etc., networking, and professional guidance",
    details: "Financial Consulting | Venture Capitalists | Angel Investors | Partner Financing | Community Development Finance Institutions",
    icon: <MonetizationOnIcon 
      color="secondary" 
      sx={{ 
        height: "4rem", 
        width: "auto" }} 
    />
  },
  {
    id: "5",
    title: "Technology", 
    desc: "Offer technical solutions from high-level strategy, compliance and security, to IT operations in the cloud and on-premises",
    details: "Local Tech (WeChat Mini-App, Website) | AI | Blockchain | Technology Consulting",
    icon: <BusinessIcon 
      color="secondary" 
      sx={{ 
        height: "4rem", 
        width: "auto" }}
    />
  },
  {
    id: "6",
    title: "Live", 
    desc: "Free resources including flexible office space and terms; access to programs, events, and support services.",
    details: "Co-working Space | Office Furnishings | Access to Conference Rooms & Event Space | Access to Wifi, Print & Copy Services | Common Kitchenette | 24/7 Secured Access",
    icon: <AccessibilityNewIcon 
      color="secondary" 
      sx={{ 
        height: "4rem", 
        width: "auto" }}
    />
  },
]

export default services;