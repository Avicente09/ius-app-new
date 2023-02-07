import Box  from '@mui/material/Box';

type Props = {
    children: JSX.Element;
}

export const Content = ({children} : Props) => {
    return(
        <Box flex={4} p={2}>
            {children}
        </Box>
    )
}
