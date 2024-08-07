import { Welcome } from '../components/Welcome/Welcome';
import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle';
import MasterLayout from '@/template/MasterLayout/MasterLayout';
import { ActionIcon, Avatar, Badge, Box, Center, Divider, Flex, Group, Paper, px, rem, rgba, RingProgress, ScrollArea, Select, Text, Title, useMantineColorScheme, useMantineTheme } from '@mantine/core';
import { useEffect } from 'react';
import { IconArrowRight, IconBurger, IconCaretDown, IconCaretDownFilled, IconCaretUp, IconCaretUpFilled, IconChevronRight, IconFocus2, IconShoppingCart, IconStar, IconStarFilled, IconTarget, IconToolsKitchen } from '@tabler/icons-react';
import { Table } from '@mantine/core';
import { smallTiles } from '../resources/dashboards'
import { elements } from '../resources/tabledata'
import { BarChart } from '@mantine/charts';



export default function HomePage() {
  // const {}



  const theme = useMantineTheme()


  const smallTilesComponents = smallTiles.map((e) => <Flex h="160" direction="column" w="100%" gap="5px" p="sm" style={{ borderRadius: "12px" }} bg={rgba(theme.colors.primary[2], .05)}  >
    <ActionIcon size="lg" color={e.color} variant='light' >
      <e.icon />
    </ActionIcon>
    <Box fz="xs" fw="bold">{e.titleText}</Box>
    <Flex align="center" justify="space-between" mt="30px">
      <Box fz={rem(30)} fw="bold" component='span'>
        {e.count}
      </Box>

      <Flex c={e.isPositive ? "green.5" : "red.5"} >
        {e.isPositive ? <IconCaretUpFilled /> : <IconCaretDownFilled />}
        {e.progrees}%
      </Flex>
    </Flex>
  </Flex>)

  const rows = elements.map((element) => (
    <Table.Tr key={element.name}>
      <Table.Td><Flex><Avatar mr="sm" src={element.img} /><Flex mt="10">{element.name}</Flex></Flex></Table.Td>
      <Table.Td>{element.orderno}</Table.Td>
      <Table.Td>{element.amount}</Table.Td>
      <Table.Td>{element.status === 'Delivered' ? (
        <Badge variant="light" color="green" tt="none">
          {element.status}
        </Badge>
      ) : (
        <Badge variant="light" color="red" tt="none">
          {element.status}
        </Badge>
      )}</Table.Td>
    </Table.Tr>
  ));
  const data = (new Array(30)).fill('').map((e, i) => ({ bar: (Math.random() * 15000 | 0) + 200, index: i + 1 }));
  return (
    <Box>

      <MasterLayout>

        <Title order={2} >Dashboard</Title>

        <Group mt="md" align='start'>
          <Box style={{ flex: 8 }} >
            <Flex gap="md" w="100%" >
              {smallTilesComponents}
            </Flex>

            <Box bg={rgba(theme.colors.primary[2], .05)} p="md" style={{ borderRadius: "12px" }} mt="md" >
              <Flex justify={'space-between'} h="60" w="100%">
                <Text size='lg' pl="20" fw={700}>Activity</Text>
                <Select data={['Weekly', 'Monthly']} value="Weekly" radius="50px" size="xs" />
              </Flex>
              <BarChart
                h={220}
                data={data.filter(item => item.index >= 5 && item.index <= 27)}
                barProps={{ radius: 20, color: theme.colors.blue[6] }}
                dataKey="index"
                yAxisProps={{ domain: [0, 15000], tickLine: true, ticks: [0, 5000, 10000, 15000], tickFormatter: (value) => value === 0 ? '0' : `${value / 1000}k` }}
                series={[
                  { name: 'bar', color: theme.colors.blue[6] },
                ]}
                xAxisProps={{
                  domain: [5, 27],
                  tickLine: true,
                  ticks: [5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27],
                  tickFormatter: (value) => value.toString()
                }}
                tickLine="y"
              />
            </Box>
            <Box bg={rgba(theme.colors.primary[2], .05)} p="md" style={{ borderRadius: "12px" }} mt="md">
              <Flex gap="md" w="100%">
                <Text size='lg' fw={700} p="10">Recent Orders</Text>
              </Flex>
              <Flex gap="xl" w="100%" >
                <Table>
                  <Table.Thead>
                    <Table.Tr>
                      <Table.Th>Customer</Table.Th>
                      <Table.Th>Order No.</Table.Th>
                      <Table.Th>Amount</Table.Th>
                      <Table.Th>Status</Table.Th>
                    </Table.Tr>
                  </Table.Thead>
                  <Table.Tbody>{rows}</Table.Tbody>
                </Table>
              </Flex>
            </Box>
          </Box>
          <Box style={{ flex: 4 }} >
            <Box>
              <Paper bg={rgba(theme.colors.primary[3], .05)} radius="md" p="xs" >
                <Flex justify="space-between">
                  <Flex direction="column" justify="space-around">
                    <Text c="dimmed" size="xs" fw={700}>
                      Net Profit
                    </Text>
                    <Text fw={700} size={rem(40)}>
                      $ 6759.25
                    </Text>
                    <Flex c='green'>
                      <IconCaretUpFilled color='green' />
                      3%
                    </Flex>
                  </Flex>
                  <Flex direction="column" justify="center" align="center">
                    <RingProgress
                      size={120}
                      roundCaps
                      thickness={15}
                      sections={[{ value: 75, color: "primary.4" }]}
                      label={
                        <Flex p="xs" direction="column" gap="0" align="center" justify="center">
                          {/* <IconCaretDown style={{ width: rem(20), height: rem(20) }} stroke={1.5} /> */}
                          <Box fw="bold" fz={rem(16)}>70%</Box>
                          <Box fz={rem(8)} ta="center" >Goal Completed</Box>
                        </Flex>
                      }
                    />
                    <Box fz="xs">*The Value here has been rounded off.</Box>
                  </Flex>
                </Flex>
              </Paper>
            </Box>
            <Flex direction="column" gap="md" mt="md" w="100%" p="lg" bg={rgba(theme.colors.primary[3], .05)} style={{ borderRadius: "12px", paddingTop: "25px", paddingBottom: "25px" }}>
              <Flex align="center" justify="space-between" w="100%" gap="md">
                <Box bg={rgba(theme.colors.red[4], .2)} style={{ minHeight: "80px", minWidth: "80px", borderRadius: "50%", display: "grid", 'placeItems': "center" }} >
                  <IconFocus2 size={35} color="orange" />
                </Box>
                <Box fw="bold" style={{ width: "100%" }}>
                  Goals
                </Box>

                <ActionIcon size="lg" color='gray' radius="lg" variant='light' >
                  <IconChevronRight />
                </ActionIcon>
              </Flex>
              <Flex align="center" justify="space-between" w="100%" gap="md">
                <Box bg={rgba(theme.colors.teal[4], .1)} style={{ minHeight: "80px", minWidth: "80px", borderRadius: "50%", display: "grid", 'placeItems': "center" }} >
                  <IconBurger size={35} color="teal" />
                </Box>
                <Box fw='bold' style={{ width: "100%" }}>
                  Popular Dishes
                </Box>

                <ActionIcon size="lg" color='gray' radius="lg" variant='light' >
                  <IconChevronRight />
                </ActionIcon>
              </Flex>
              <Flex align="center" justify="space-between" w="100%" gap="md">
                <Box bg={rgba(theme.colors.lime[4], .2)} style={{ minHeight: "80px", minWidth: "80px", borderRadius: "50%", display: "grid", 'placeItems': "center" }} >
                  <IconToolsKitchen size={35} color="lime" />
                </Box>
                <Box fw="bold" style={{ width: "100%" }}>
                  Menus
                </Box>

                <ActionIcon size="lg" color='gray' radius="lg" variant='light' >
                  <IconChevronRight />
                </ActionIcon>
              </Flex>
            </Flex>
            <Box bg={rgba(theme.colors.primary[2], .05)} p="md" style={{ borderRadius: "12px" }} mt="md">
              <ScrollArea h={403} type="always" offsetScrollbars scrollbarSize={8} scrollHideDelay={0}>
                <Flex gap="md" w="100%">
                  <Text size='lg' fw={700} mb={6}>Customer's Feedback</Text>
                </Flex>
                <Box>
                  <Flex>
                    <Avatar mr="sm" src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUEW4lfOvP5UG3mxbVAjkAQbunWes0EBhADw&s' />
                    <Text mt="6">Jenny Wilson</Text>
                  </Flex>
                  <Flex mt={4} gap={2}>
                    <IconStarFilled size={18} color='yellow' />
                    <IconStarFilled size={18} color='yellow' />
                    <IconStarFilled size={18} color='yellow' />
                    <IconStarFilled size={18} color='yellow' />
                    <IconStarFilled size={18} color='white' />
                  </Flex>
                  <Box mt={4} fz={12}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius dolores aliquam quia magni eligendi, autem ullam quisquam quae veritatis id perspiciatis commodi facilis enim suscipit exercitationem excepturi. Ut, eaque quas.</Box>
                </Box>
                <Divider my="md" />
                <Box>
                  <Flex>
                    <Avatar mr="sm" src='https://img.freepik.com/free-photo/3d-icon-travel-with-man_23-2151037420.jpg?size=626&ext=jpg&ga=GA1.1.1711099489.1721389524&semt=ais_hybrid' />
                    <Text mt="6">Dianne Russell</Text>
                  </Flex>
                  <Flex mt={4} gap={2}>
                    <IconStarFilled size={18} color='yellow' />
                    <IconStarFilled size={18} color='yellow' />
                    <IconStarFilled size={18} color='yellow' />
                    <IconStarFilled size={18} color='yellow' />
                    <IconStarFilled size={18} color='yellow' />
                  </Flex>
                  <Box mt={4} fz={12}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius dolores aliquam quia magni eligendi.</Box>
                </Box>
                <Divider my="md" />
                <Box>
                  <Flex>
                    <Avatar mr="sm" src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQc9-MhcXAvbYHiYrEFyueIul4dcA4Sf0x2x-3U6pQ-srrvunDlU9YgyBXnUngmdNqojqQ&usqp=CAU' />
                    <Text mt="6">Devon Lane</Text>
                  </Flex>
                  <Flex mt={4} gap={2}>
                    <IconStarFilled size={18} color='yellow' />
                    <IconStarFilled size={18} color='yellow' />
                    <IconStarFilled size={18} color='yellow' />
                    <IconStarFilled size={18} color='white' />
                    <IconStarFilled size={18} color='white' />
                  </Flex>
                  <Box mt={4} fz={12}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius dolores aliquam quia magni eligendi, autem ullam quisquam quae veritatis id perspiciatis commodi facilis enim suscipit exercitationem excepturi. Ut, eaque quas.</Box>
                </Box>
                <Divider my="md" />
                <Box>
                  <Flex>
                    <Avatar mr="sm" src='https://img.freepik.com/free-photo/portrait-beautiful-woman_144627-7888.jpg?size=626&ext=jpg&ga=GA1.1.1711099489.1721389524&semt=ais_hybrid' />
                    <Text mt="6">Kate Ryian</Text>
                  </Flex>
                  <Flex mt={4} gap={2}>
                    <IconStarFilled size={18} color='yellow' />
                    <IconStarFilled size={18} color='yellow' />
                    <IconStarFilled size={18} color='white' />
                    <IconStarFilled size={18} color='white' />
                    <IconStarFilled size={18} color='white' />
                  </Flex>
                  <Box mt={4} fz={12}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius dolores aliquam quia magni eligendi, Ut, eaque quas.</Box>
                </Box>
              </ScrollArea>

            </Box>
          </Box>
        </Group>
      </MasterLayout>
      {/* <ColorSchemeToggle /> */}
    </Box>
  );
}
