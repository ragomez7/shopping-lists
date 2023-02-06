import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";

const NameTextField = ({name, setName}) => {
    return (
        <>
            <Typography
                sx={{
                    fontFamily: "Quicksand",
                    fontWeight: 500,
                    fontSize: '14px',
                    lineHeight: '17.5px',
                    color: '#34333A',
                    marginTop: '34px',
                    marginLeft: '2px'
                }}
            >
                Name
            </Typography>
            <TextField
                required
                id="item-field"
                name="item-field"
                type="text"
                placeholder="Enter item's name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                sx={{
                    width: '310px',
                    height: '61.25px',
                    marginTop: '7px'
                }}
                InputProps={{
                    sx: {
                        borderRadius: '12px',
                    }
                }}
            />
        </>
    )
};

export default NameTextField;