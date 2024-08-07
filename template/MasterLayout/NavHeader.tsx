import { Autocomplete, Group, Burger, rem, Image, Avatar, ActionIcon, TextInput, useMantineColorScheme } from '@mantine/core';
import { useDisclosure, useLocalStorage } from '@mantine/hooks';
import { IconBell, IconBrandGmail, IconMail, IconMoon, IconNotification, IconRecordMail, IconSearch, IconSettings, IconSun } from '@tabler/icons-react';
import classes from './NavHeader.module.css';
import { useEffect, useState } from 'react';

const links = [
    { link: '/about', label: 'Features' },
    { link: '/pricing', label: 'Pricing' },
    { link: '/learn', label: 'Learn' },
    { link: '/community', label: 'Community' },
];

export function NavHeader() {
    const [opened, { toggle }] = useDisclosure(false);

    const items = links.map((link) => (
        <a
            key={link.label}
            href={link.link}
            className={classes.link}
            onClick={(event) => event.preventDefault()}
        >
            {link.label}
        </a>
    ));
    const { setColorScheme } = useMantineColorScheme();

    const [appTheme, setColorTheme] = useLocalStorage<"light" | "dark">({
        key: "application_theme",
        defaultValue: "dark",
    });


    useEffect(() => {
        setColorScheme(appTheme)
    }, [appTheme])


    const changeTheme = () => {
        if (appTheme == "dark") {
            setColorTheme("light")
        }else{
            setColorTheme("dark")
        }
    }

    return (
        <header className={classes.header}>
            <div className={classes.inner}>
                <Group>
                    <Burger opened={opened} onClick={toggle} size="sm" hiddenFrom="sm" />
                    <TextInput leftSection={<IconSearch />} radius="md" w={300} placeholder='Search' />
                </Group>

                <Group>
                    <ActionIcon variant='subtle' color='gray' size="lg" radius="lg">
                        {appTheme !== "dark" ? <IconMoon onClick={changeTheme} /> : <IconSun onClick={changeTheme} />}
                    </ActionIcon>

                    <ActionIcon variant='light' size="lg" radius="lg" color='gray'>
                        <IconMail />
                    </ActionIcon>
                    <ActionIcon variant='light' size="lg" radius="lg" color='gray'>
                        <IconSettings />
                    </ActionIcon>
                    <ActionIcon variant='light' size="lg" radius="lg" color='gray'>
                        <IconBell />
                    </ActionIcon>
                    <Avatar src="https://i.pinimg.com/236x/da/10/86/da108670e521c5486ea9f5679b2c64fb.jpg" />
                </Group>
            </div>
        </header>
    );
}


export default NavHeader