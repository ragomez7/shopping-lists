import { Box, Button, Icon, Typography } from "@mui/material"

const ShoppingList = () => {
    return (
        <Box className="ShoppingList"
                sx={{
                    width: '389px',
                    backgroundColor: '#fff0dd',
                    paddingLeft: '49px',
                    paddingTop: '43px'
                }}
            >
                <Box
                    sx={{
                        width: '300px',
                        height: '130px',
                        borderRadius: '24px',
                        backgroundColor: "#80485B",
                        position: 'relative'
                    }}
                >
                    <Icon  
                        sx={{
                            width: '100px',
                            height: '155px',
                            textAlign: 'center',
                            position: 'absolute',
                            left: 15,
                            bottom: 0
                        }}
                    >
                        <img src='https://res.cloudinary.com/dg8htxonw/image/upload/v1675553451/source_lvil20.svg' />
                    </Icon>
                    <Typography
                        sx={{
                            widht: '159px',
                            height: '40px',
                            color: '#FFF',
                            paddingTop: '18px',
                            marginLeft: '122px',
                            fontFamily: 'Quicksand',
                            fontWeight: 700,
                            fontSize: '16px',
                            lineHeight: '20px'
                        }}
                    >
                        Didn't find what you need?
                    </Typography>
                    <Button
                        style={{
                            marginLeft: '122px',
                            width: '120px',
                            height: '40px',
                            borderRadius: '12px',
                            backgroundColor: '#FFFFFF',
                            color: '#000000',
                            fontFamily: 'Quicksand',
                            fontWeight: 700,
                            fontSize: '14px',
                            lineHeight: '17.5px',
                            marginTop: '25px'
                        }}
                    >
                        Add Item
                    </Button>
                </Box>
            </Box>
    )
};

export default ShoppingList;