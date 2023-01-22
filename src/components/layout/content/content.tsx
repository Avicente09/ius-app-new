import { Box } from '@mui/material';

type Props = {
    children: JSX.Element;
}

const Content = ({children} : Props) => {
    return(
        <Box flex={4} p={2}>
            {children}
        </Box>
    )
}

export default Content