import {
    Text,
    Title,
    SimpleGrid,
    TextInput,
    Textarea,
    Button,
    Group,
    ActionIcon,
    rem,
    useMantineTheme,
    Notification
  } from '@mantine/core';
  import React, { useState, useEffect } from 'react';
  import { IconBrandTwitter, IconBrandYoutube, IconBrandInstagram, IconX, IconCheck } from '@tabler/icons-react';
  import { ContactIconsList } from '../components/ContactIcons';
  import { useMediaQuery } from '@mantine/hooks';
  import useStyles from './Contacts.styles'
  import emailjs from '@emailjs/browser'
  import { useForm } from '@mantine/form';
  import { motion, useAnimation } from 'framer-motion';
  
  const social = [IconBrandTwitter, IconBrandYoutube, IconBrandInstagram];
  
  export function ContactUs() {
    const { classes } = useStyles();
    const theme = useMantineTheme();
    const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);
    const [notification, setNotification] = useState(null);

    const leftColumnControls = useAnimation();
    const rightColumnControls = useAnimation();
    
    const icons = social.map((Icon, index) => (
      <ActionIcon key={index} size={28} className={classes.social} variant="transparent">
        <Icon size="1.4rem" stroke={1.5} />
      </ActionIcon>
    ));

    function ShowNotif(title, msg, status){
      console.log("SHOW NOTIF");
      setNotification(
        <Notification 
        icon={status === "ERROR" ? <IconX size="1.2rem" />:<IconCheck size="1.2rem" />} 
        title={title} 
        onClose={() => setNotification(null)}
        color={status==="ERROR" ? "red":"blue"} 
        >
          {msg}
        </Notification>
      );
    }

    async function SendEmail(event){
      event.preventDefault();
      console.log("SENT", event.target)
      emailjs.sendForm(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_SERVICE_TEMPLATE_ID, event.target, process.env.REACT_APP_PUBLIC_KEY)
      .then((result)=>{
        console.log("RES", result)
        if(result.text==='OK')
          ShowNotif("SUBMITTED", result.text, "SUCCESS")
      })
      .catch(error =>{
        console.log("ERR", error)
        if(error.text==='')
        console.log("KESINI", error)
           ShowNotif("FAILED", "Please, check your internet connection!", "ERROR")
      });
      
    }

    const form = useForm({
      initialValues: { username: '', email_from: '', message: ''},

      // functions will be used to validate values at corresponding key
      validate: {
          username: (value) => (value.length == 0)  ? 'Name must be filled' : (/[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(value)) ? 'Name is not allowed special character' : null,
          email_from: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
      },
    });
    
    useEffect(() => {
      // Animasikan elemen-elemen dengan useAnimation
      leftColumnControls.start({ x: 0 }); // Menggeser elemen ke kiri
      rightColumnControls.start({ x: 0 }); // Menggeser elemen ke kanan
    }, [leftColumnControls, rightColumnControls]);

    return (
      <div className={classes.wrapper}>
        <SimpleGrid cols={2} spacing={10} breakpoints={[{ maxWidth: '667', cols: 1, spacing:50 }]}>
          <motion.div 
          initial={{ x: '-100%' }}
          animate={leftColumnControls}
          transition={{duration: 1}}
          style={{paddingLeft: mobile ? rem(10):  rem(350), width:'100%'}}
          >
            <Title className={classes.title}>LET'S GET IN TOUCH!</Title>
            <Text className={classes.description} mt="sm" mb={30}>
            Interested in creating something amazing together? Let's turn your
            ideas into reality! Get in touch and let's embark on this creative
            journey.
            </Text>
  
            <ContactIconsList variant="white" />
  
            <Group mt="xl">{icons}</Group>
          </motion.div>
          <motion.div
           initial={{ x: '100%' }}
           animate={rightColumnControls}
           transition={{duration: 1}}
           className={classes.form} 
           style={{width: mobile ? '100%':'65%'}}
           >
          <form onSubmit={(event)=>{SendEmail(event)}}>
            <TextInput
              label="Email"
              placeholder="your@email.com"
              required
              name='email_from'
              classNames={{ input: classes.input, label: classes.inputLabel }}
              {...form.getInputProps('email_from')}
            />
            <TextInput
              label="Name"
              placeholder="John Doe"
              mt="md"
              name='username'
              classNames={{ input: classes.input, label: classes.inputLabel }}
              {...form.getInputProps('username')}
            />
            <Textarea
              required
              label="Your message"
              placeholder="I want to order your goods"
              minRows={4}
              mt="md"
              name='messages'
              classNames={{ input: classes.input, label: classes.inputLabel }}
              {...form.getInputProps('message')}
            />
  
            <Group position="right" mt="md">
              <Button className={classes.control} type='submit'>Send message</Button>
            </Group>
            {notification}
          </form>
          </motion.div>
        </SimpleGrid>
      </div>
    );
  }