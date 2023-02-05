import Navbar from "../Components/Navbar/Navbar"
import Sidebar from "../Components/Sidebar/Sidebar"
import Box from '@mui/material/Box';

import Footer from "../Components/Footer/Footer";


function DashboardLayout(props) {
    return (
        <Box display={'flex'} >

            <Box flex={1}  position={'sticky'} left={0}  top={0} height={'100vh'} >
               
                <Sidebar />
                
            </Box>

            <Box flex={5}  >

                <Navbar />
                {props.children}
            </Box>
                <Footer />
        </Box >
    )
}

export default DashboardLayout 
