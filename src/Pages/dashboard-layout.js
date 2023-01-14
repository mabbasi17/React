import Navbar from "../Components/Navbar/Navbar"
import Sidebar from "../Components/Sidebar/Sidebar"
import Box from '@mui/material/Box';

import Footer from "../Components/Footer/Footer";


function DashboardLayout(props) {
    return (
        <Box display={'flex'}  height={'100vh'}>

            <Box flex={1}    sx={{position: 'sticky',
         left: 0, top:0 ,background: '#eee' } } >
                <Box  >
                <Sidebar />
                </Box>
            </Box>

            <Box flex={5}  >

                <Navbar />
                {props.children}
                <Footer />
            </Box>
        </Box >
    )
}

export default DashboardLayout 
