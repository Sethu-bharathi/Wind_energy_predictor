// material-ui
import { Breadcrumbs, Divider, Grid, Link, Stack, Typography } from '@mui/material';

// project import
import AuthLogin from '../authentication/auth-forms/AuthLogin';
import AuthWrapper from '../authentication/AuthWrapper';
import ComponentSkeleton from './ComponentSkeleton';
import MainCard from 'components/MainCard';

// ==============================|| COMPONENTS - PREDCTING MANUALLY||============================== //

const ComponentTypography = () => (
    <ComponentSkeleton>
        <AuthWrapper>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Stack direction="row" justifyContent="space-between" alignItems="baseline" sx={{ mb: { xs: -0.5, sm: 0.5 } }}>
                        <Typography variant="h3">Login</Typography>
                        <Typography component={Link} to="/register" variant="body1" sx={{ textDecoration: 'none' }} color="primary">
                            Don&apos;t have an account?
                        </Typography>
                    </Stack>
                </Grid>
                <Grid item xs={12}>
                    <AuthLogin />
                </Grid>
            </Grid>
        </AuthWrapper>
    </ComponentSkeleton>
);

export default ComponentTypography;
