import { Grid } from "@mui/material"

const GridComponents = () => {
  return (
    <div>
        <Grid container spacing={2}>
            <Grid item xs={12} sm={8}  md={6} lg={1} xl={1} sx={{background:"red" }}>
Content 1
            </Grid>
            <Grid item xs={12} lg={1}sx={{background:"green" }}>
Content 2
            </Grid>
        </Grid>
    </div>
  )
}
export default GridComponents