import { Typography, Container, Button } from "@mui/material";

const TypoButtons = () => {
  return (
    <div>
      {/* Container, 👇 sağdan soldan default margin veriyor */}
      <Container maxWidth="md">
        {/* Bu container'ın maxWidh'i md'ye kadar olsun 👆 */}
        <Typography
          //? Variant'ına h2 verdiğimiz için h2 tag'i oluşturuyor
          //?  component'e h4 verince h4 oldu. Ama görüntüsü (styling) h2 oluyor
          variant="h4"
          component="h6"
          align="center"
          color="error.light"
          //! sx prop'uyla çift süslü içinde inline styling verebiliyoruz 👇
          sx={{ background: "lightgrey", mt: 4, border: "2px solid darkblue" }}
        >
          Typography, Buttons, Container, Box
        </Typography>

        {/* body1, p elementi oluşturdu 👇 */}
        <Typography variant="body1" align="justify">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium
          cupiditate sit, error alias enim inventore sapiente sed voluptatem
          similique tempora eaque ducimus rerum omnis nostrum ad odio, aperiam
          fuga totam?
        </Typography>

        {/* button, span elementi oluşturdu 👇 */}
        <Typography
          variant="button"
          align="justify"
          color="secondary"
          sx={{ display: "inline-block", mt: 4 }}
        >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium
          cupiditate sit, error alias enim inventore sapiente sed voluptatem
          similique tempora eaque ducimus rerum omnis nostrum ad odio, aperiam
          fuga totam?
        </Typography>
      </Container>

      <Container maxWidth="md">
        <Button variant="contained" color="secondary">
          CLICK
        </Button>
        <Button variant="outlined" color="success">
          SEND
        </Button>
        <Button variant="contained" color="error">
          DELETE
        </Button>

      </Container>
    </div>
  );
};

export default TypoButtons;