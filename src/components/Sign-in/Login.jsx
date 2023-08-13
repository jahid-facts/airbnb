import * as Yup from 'yup';
import { useState } from 'react'; // Remove useEffect
import { useFormik, Form, FormikProvider } from 'formik';
import { useNavigate } from 'react-router-dom';

import { styled } from '@mui/material/styles';
import {
    Card,
    Container,
    Typography,
    Stack,
    TextField,
    IconButton,
    InputAdornment
} from '@mui/material';

import { LoadingButton } from '@mui/lab';
import Iconify from '../../components/Iconify';

import { useLoginMutation } from "../../services/appApi";

const SectionStyle = styled(Card)(({ theme }) => ({
    width: '100%',
    maxWidth: 464,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    margin: theme.spacing(2, 0, 2, 2),
}));

const ContentStyle = styled('div')(({ theme }) => ({
    maxWidth: 800,
    margin: 'auto',
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    padding: theme.spacing(12, 0),
}));

export default function Login() {
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const [loginError, setLoginError] = useState(null);
    const [login, { isLoading }] = useLoginMutation();

    const UserSchema = Yup.object().shape({
        email: Yup.string().email('Email must be a valid email address').required('Email is required'),
        password: Yup.string().required('Password is required')
            .min(8, "Password must have at least 8 characters")
            .matches(/[0-9]/, "Must have a number")
            .matches(/[a-z]/, "Must have atleast one lowercase")
            .matches(/[A-Z]/, "Must have atleast one Uppercase")
            .matches(/[!@#$%^&*]/, "Must have atleast one special character"),
    });

    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        validationSchema: UserSchema,
        onSubmit: async (values) => {
            try {
                const response = await login({ email: values.email, password: values.password });
                // Handle success, e.g., redirect to a dashboard page
                console.log('Login successful:', response.data);
                navigate('/dashboard'); // Replace '/dashboard' with your actual dashboard route
            } catch (error) {
                // Handle error, display error message, etc.
                console.error('Login error:', error);
                setLoginError("Invalid email or password");
            }
        },
    });

    const {
        errors,
        touched,
        handleSubmit,
        isSubmitting,
        getFieldProps
    } = formik;

    // ... rest of the code ...

    return (
        <Container>
            <Card>
                <Stack spacing={3} p={4}>
                    <Typography variant="h4" gutterBottom>
                        Login
                    </Typography>
                    <TextField
                        fullWidth
                        autoComplete="username"
                        type="email"
                        label="Email address"
                        {...getFieldProps('email')}
                        error={Boolean(touched.email && errors.email)}
                        helperText={touched.email && errors.email}
                    />
                    <TextField
                        fullWidth
                        autoComplete="current-password"
                        type={showPassword ? 'text' : 'password'}
                        label="Password"
                        {...getFieldProps('password')}
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <IconButton edge="end" onClick={() => setShowPassword((prev) => !prev)}>
                                        <Iconify icon={showPassword ? 'eva:eye-fill' : 'eva:eye-off-fill'} />
                                    </IconButton>
                                </InputAdornment>
                            ),
                        }}
                        error={Boolean(touched.password && errors.password)}
                        helperText={touched.password && errors.password}
                    />
                    {loginError && (
                        <Typography color="error" variant="body2">
                            {loginError}
                        </Typography>
                    )}
                    <LoadingButton
                        fullWidth
                        size="large"
                        type="submit"
                        variant="contained"
                        loading={isLoading || isSubmitting}
                        onClick={handleSubmit}
                    >
                        Login
                    </LoadingButton>
                </Stack>
            </Card>
        </Container>
    );
};
// export default Login;


