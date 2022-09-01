import * as React from "react";
// import "../styles/aboutUsPage.css";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Typography } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import Stack from "@mui/material/Stack";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

const currencies = [
  {
    value: "Помощь и поддержка",
    label: "Помощь и поддержка",
  },
  {
    value: "Парнёрства",
    label: "Парнёрства",
  },
  {
    value: "Сообщение о неисправностях",
    label: "Сообщение о неисправностях",
  },
  {
    value: "Другое",
    label: "Другое",
  },
];

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function AboutUsPage() {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const [currency, setCurrency] = React.useState();

  const handleChange = (event) => {
    setCurrency(event.target.value);
  };

  const general = {
    mt: "10%",
    mr: "10%",
    display: "flex",
    flexDirection: "column",
    borderLeft: "2px solid #A9ABAE",
    pl: "10%",
    justifyContent: "center",
  };

  return (
    <Box
      className="about__m"
      sx={{
        flexGrow: 1,
        display: "flex",
        justifyContent: "space-around",
        width: "100%",
      }}
    >
      <Box sx={{ textAlign: "center", width: "70%", mt: "10%" }}>
        <Box sx={{ width: "80%", m: "15vmin auto", color: "#656565" }}>
          <Typography sx={{ mb: "3%" }}>Приветствую тебя!</Typography>
          <Typography>
            Наш магазин существует нисколько дней и нам пока что никто не
            доверился, более 0 довольных клиентов. Стань первым покупателем и
            получи в подарок консультанта. 1+1 Ждём вас!!
          </Typography>
        </Box>
      </Box>

      <Box className="about_bo" sx={general}>
        <Box
          component="form"
          sx={{
            "& .MuiTextField-root": { width: "25ch" },
          }}
          noValidate
          autoComplete="off"
        ></Box>
        <Typography sx={{ display: "flex", pl: 2, color: "#656565" }}>
          Обратная связь
        </Typography>
        <TextField
          id="standard-multiline-static"
          label="Email"
          variant="standard"
          sx={{ m: 2, width: "50vh" }}
          color="secondary"
        />
        <TextField
          id="standard-select-currency"
          select
          label="Выберите запрос"
          value={currency}
          onChange={handleChange}
          variant="standard"
          sx={{ m: 2, width: "50vh" }}
          color="secondary"
        >
          {currencies.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          id="standard-multiline-static"
          label="Сообщение"
          multiline
          rows={4}
          variant="standard"
          sx={{ m: 2, width: "50vh" }}
          color="secondary"
        />
        <Stack
          direction="row"
          spacing={2}
          sx={{
            display: "flex",
            justifyContent: "end",
            pr: 2,
          }}
        >
          <Button
            variant="contained"
            endIcon={<SendIcon />}
            sx={{ backgroundColor: "#8C2CEF", mt: 2 }}
            color="secondary"
            onClick={handleClick}
            className="about_s"
          >
            Отправить
          </Button>
          <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
            <Alert
              onClose={handleClose}
              severity="success"
              sx={{ width: "100%" }}
            >
              Ваше обращение отправлено, в скором времени!
            </Alert>
          </Snackbar>
        </Stack>
      </Box>
    </Box>
  );
}
