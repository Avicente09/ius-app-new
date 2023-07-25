import AccountCircle from '@mui/icons-material/AccountCircle';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import EmailIcon from '@mui/icons-material/Email';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import {
  Form,
  FormInputText,
  FormInputType,
} from '@presentation/components/molecules';
import { useForm } from 'react-hook-form';

import type {
  ProfileFormFieldValues,
  ProfileFormProps,
} from './profile-form.types';

const defaultValues: ProfileFormFieldValues = {
  name: 'Angelina Jolie',
  birthdate: '02/02/1965',
  email: 'angie_jolie@mail.com',
  phone: '56987741',
  addresses: 'Hollywood, CA',
};
export const ProfileForm = ({ onSubmit }: ProfileFormProps) => {
  const { handleSubmit, control } = useForm({ defaultValues });
  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Grid container>
        <Grid item xs={12} alignItems="center">
          <Box display="flex" justifyContent="center" alignItems="center">
            <Avatar sx={{ bgcolor: 'skyblue', width: 150, height: 150 }} />
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <AccountCircle
              sx={{ color: 'action.active', mr: 1, my: 0.5, fontSize: '35px' }}
            />
            <FormInputText
              name="name"
              fControl={control}
              label="Nombre Completo"
              validations={{
                required: true,
                customErrorMsg: 'El campo nombre es requerido',
              }}
            />
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <CalendarMonthIcon
              sx={{ color: 'action.active', mr: 1, my: 0.5, fontSize: '35px' }}
            />
            {/* TODO: create and use actual input for date picker */}
            <FormInputText
              name="birthdate"
              fControl={control}
              label="Fecha de Nacimiento"
            />
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <EmailIcon
              sx={{ color: 'action.active', mr: 1, my: 0.5, fontSize: '35px' }}
            />
            <FormInputText
              name="email"
              fControl={control}
              label="Correo electrónico"
              validations={{
                required: true,
              }}
            />
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <PhoneAndroidIcon
              sx={{ color: 'action.active', mr: 1, my: 0.5, fontSize: '35px' }}
            />
            <FormInputText
              name="phone"
              fControl={control}
              type={FormInputType.Phone}
              label="Teléfono"
              placeholder="(502) 5555-5555"
            />
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <ContactMailIcon
              sx={{ color: 'action.active', mr: 1, my: 0.5, fontSize: '35px' }}
            />
            <FormInputText
              name="addresses"
              fControl={control}
              label="Direcciones"
            />
          </Box>
        </Grid>

        <Grid item xs={12}>
          <Button type="submit" variant={'contained'}>
            Actualizar Datos
          </Button>
        </Grid>
      </Grid>
    </Form>
  );
};
