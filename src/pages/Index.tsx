import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const navItems = [
    { id: 'home', label: 'Главная', icon: 'Home' },
    { id: 'team', label: 'Команда', icon: 'Users' },
    { id: 'stats', label: 'Статистика', icon: 'BarChart3' },
    { id: 'matches', label: 'Матчи', icon: 'Calendar' },
    { id: 'table', label: 'Турнирная таблица', icon: 'Trophy' },
    { id: 'history', label: 'История', icon: 'Clock' },
    { id: 'contacts', label: 'Контакты', icon: 'Mail' },
  ];

  const recentMatches = [
    { date: '15.10.2024', opponent: 'Динамо', score: '5 - 3', result: 'win', location: 'Дома' },
    { date: '12.10.2024', opponent: 'Спартак', score: '2 - 4', result: 'loss', location: 'В гостях' },
    { date: '08.10.2024', opponent: 'ЦСКА', score: '3 - 3', result: 'draw', location: 'Дома' },
    { date: '05.10.2024', opponent: 'Торпедо', score: '6 - 2', result: 'win', location: 'В гостях' },
  ];

  const teamStats = [
    { label: 'Игр сыграно', value: '24', icon: 'Calendar' },
    { label: 'Побед', value: '16', icon: 'TrendingUp' },
    { label: 'Поражений', value: '6', icon: 'TrendingDown' },
    { label: 'Голов забито', value: '89', icon: 'Target' },
  ];

  const topPlayers = [
    { name: 'Иванов А.', position: 'Нападающий', goals: 18, assists: 12 },
    { name: 'Петров С.', position: 'Защитник', goals: 5, assists: 22 },
    { name: 'Сидоров К.', position: 'Нападающий', goals: 15, assists: 14 },
  ];

  const standings = [
    { position: 1, team: 'СКА 1946', games: 24, wins: 16, draws: 2, losses: 6, points: 50 },
    { position: 2, team: 'Динамо', games: 24, wins: 15, draws: 3, losses: 6, points: 48 },
    { position: 3, team: 'ЦСКА', games: 24, wins: 14, draws: 4, losses: 6, points: 46 },
    { position: 4, team: 'Спартак', games: 24, wins: 13, draws: 3, losses: 8, points: 42 },
    { position: 5, team: 'Торпедо', games: 24, wins: 10, draws: 4, losses: 10, points: 34 },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-blue-50">
      <nav className="bg-primary text-white shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center">
                <span className="text-2xl font-bold text-primary">СКА</span>
              </div>
              <div>
                <h1 className="text-2xl font-bold">СКА 1946</h1>
                <p className="text-sm text-blue-200">VFHL League</p>
              </div>
            </div>
            <div className="hidden md:flex space-x-1">
              {navItems.map((item) => (
                <Button
                  key={item.id}
                  variant={activeSection === item.id ? 'secondary' : 'ghost'}
                  className={activeSection === item.id ? 'text-primary' : 'text-white hover:text-accent'}
                  onClick={() => setActiveSection(item.id)}
                >
                  {item.label}
                </Button>
              ))}
            </div>
            <Button variant="ghost" className="md:hidden text-white">
              <Icon name="Menu" size={24} />
            </Button>
          </div>
        </div>
      </nav>

      <div className="md:hidden bg-white border-b">
        <div className="container mx-auto px-4 py-2 overflow-x-auto">
          <div className="flex space-x-2">
            {navItems.map((item) => (
              <Button
                key={item.id}
                variant={activeSection === item.id ? 'default' : 'outline'}
                size="sm"
                onClick={() => setActiveSection(item.id)}
                className="whitespace-nowrap"
              >
                {item.label}
              </Button>
            ))}
          </div>
        </div>
      </div>

      <main className="container mx-auto px-4 py-8">
        {activeSection === 'home' && (
          <div className="space-y-8 animate-fade-in">
            <div className="relative h-[400px] bg-gradient-to-r from-primary via-blue-600 to-accent rounded-lg overflow-hidden shadow-2xl">
              <div className="absolute inset-0 flex items-center justify-center text-white z-10">
                <div className="text-center">
                  <h2 className="text-5xl md:text-7xl font-bold mb-4">СКА 1946</h2>
                  <p className="text-xl md:text-2xl mb-6">Виртуальная Федеральная Хоккейная Лига</p>
                  <div className="flex justify-center gap-4">
                    <Button size="lg" variant="secondary" className="hover-scale">
                      <Icon name="Trophy" size={20} className="mr-2" />
                      Турнирная таблица
                    </Button>
                    <Button size="lg" variant="outline" className="bg-white/10 hover:bg-white/20 text-white border-white hover-scale">
                      <Icon name="Calendar" size={20} className="mr-2" />
                      Расписание
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {teamStats.map((stat, index) => (
                <Card key={index} className="hover-scale transition-all">
                  <CardContent className="pt-6 text-center">
                    <div className="flex justify-center mb-3">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                        <Icon name={stat.icon as any} size={24} className="text-primary" />
                      </div>
                    </div>
                    <p className="text-3xl font-bold text-primary mb-1">{stat.value}</p>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-2xl">
                  <Icon name="Clock" size={28} className="mr-3 text-primary" />
                  Последние матчи
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {recentMatches.map((match, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-4 bg-muted/50 rounded-lg hover:bg-muted transition-all hover-scale"
                    >
                      <div className="flex items-center space-x-4">
                        <div
                          className={`w-2 h-12 rounded-full ${
                            match.result === 'win'
                              ? 'bg-green-500'
                              : match.result === 'loss'
                              ? 'bg-red-500'
                              : 'bg-yellow-500'
                          }`}
                        />
                        <div>
                          <p className="font-semibold text-lg">СКА 1946 vs {match.opponent}</p>
                          <p className="text-sm text-muted-foreground">{match.date} · {match.location}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-2xl font-bold text-primary">{match.score}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {activeSection === 'team' && (
          <div className="space-y-6 animate-fade-in">
            <h2 className="text-4xl font-bold text-primary mb-6">Состав команды</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {topPlayers.map((player, index) => (
                <Card key={index} className="hover-scale">
                  <CardHeader>
                    <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mb-4 mx-auto">
                      <Icon name="User" size={40} className="text-primary" />
                    </div>
                    <CardTitle className="text-center">{player.name}</CardTitle>
                    <p className="text-center text-muted-foreground">{player.position}</p>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Голы:</span>
                        <span className="font-bold text-primary">{player.goals}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Передачи:</span>
                        <span className="font-bold text-primary">{player.assists}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {activeSection === 'stats' && (
          <div className="space-y-6 animate-fade-in">
            <h2 className="text-4xl font-bold text-primary mb-6">Статистика сезона</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Общая статистика</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span>Процент побед</span>
                      <span className="text-2xl font-bold text-primary">66.7%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-3">
                      <div className="bg-primary h-3 rounded-full" style={{ width: '66.7%' }} />
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span>Голов за игру</span>
                      <span className="text-2xl font-bold text-primary">3.7</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-3">
                      <div className="bg-accent h-3 rounded-full" style={{ width: '74%' }} />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Лучшие бомбардиры</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {topPlayers.map((player, index) => (
                      <div key={index} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                        <div className="flex items-center space-x-3">
                          <span className="text-xl font-bold text-primary">{index + 1}</span>
                          <div>
                            <p className="font-semibold">{player.name}</p>
                            <p className="text-sm text-muted-foreground">{player.position}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="text-xl font-bold text-primary">{player.goals}</p>
                          <p className="text-xs text-muted-foreground">голов</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        )}

        {activeSection === 'matches' && (
          <div className="space-y-6 animate-fade-in">
            <h2 className="text-4xl font-bold text-primary mb-6">Матчи</h2>
            <Tabs defaultValue="recent" className="w-full">
              <TabsList className="grid w-full max-w-md grid-cols-2">
                <TabsTrigger value="recent">Последние</TabsTrigger>
                <TabsTrigger value="upcoming">Предстоящие</TabsTrigger>
              </TabsList>
              <TabsContent value="recent" className="space-y-4 mt-6">
                {recentMatches.map((match, index) => (
                  <Card key={index} className="hover-scale">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div className="flex-1">
                          <p className="text-sm text-muted-foreground mb-2">{match.date}</p>
                          <p className="text-xl font-semibold mb-1">СКА 1946 vs {match.opponent}</p>
                          <p className="text-sm text-muted-foreground">{match.location}</p>
                        </div>
                        <div className="text-center">
                          <p className="text-3xl font-bold text-primary mb-1">{match.score}</p>
                          <span
                            className={`px-3 py-1 rounded-full text-sm font-medium ${
                              match.result === 'win'
                                ? 'bg-green-100 text-green-700'
                                : match.result === 'loss'
                                ? 'bg-red-100 text-red-700'
                                : 'bg-yellow-100 text-yellow-700'
                            }`}
                          >
                            {match.result === 'win' ? 'Победа' : match.result === 'loss' ? 'Поражение' : 'Ничья'}
                          </span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </TabsContent>
              <TabsContent value="upcoming" className="mt-6">
                <Card>
                  <CardContent className="p-12 text-center">
                    <Icon name="Calendar" size={48} className="mx-auto text-muted-foreground mb-4" />
                    <p className="text-muted-foreground">Предстоящие матчи будут объявлены позже</p>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        )}

        {activeSection === 'table' && (
          <div className="space-y-6 animate-fade-in">
            <h2 className="text-4xl font-bold text-primary mb-6">Турнирная таблица VFHL</h2>
            <Card>
              <CardContent className="p-0">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-primary text-white">
                      <tr>
                        <th className="py-4 px-6 text-left font-semibold">Место</th>
                        <th className="py-4 px-6 text-left font-semibold">Команда</th>
                        <th className="py-4 px-4 text-center font-semibold">И</th>
                        <th className="py-4 px-4 text-center font-semibold">В</th>
                        <th className="py-4 px-4 text-center font-semibold">Н</th>
                        <th className="py-4 px-4 text-center font-semibold">П</th>
                        <th className="py-4 px-6 text-center font-semibold">Очки</th>
                      </tr>
                    </thead>
                    <tbody>
                      {standings.map((team) => (
                        <tr
                          key={team.position}
                          className={`border-b hover:bg-muted/50 transition-colors ${
                            team.team === 'СКА 1946' ? 'bg-accent/10' : ''
                          }`}
                        >
                          <td className="py-4 px-6">
                            <span
                              className={`inline-flex items-center justify-center w-8 h-8 rounded-full font-bold ${
                                team.position === 1
                                  ? 'bg-accent text-primary'
                                  : team.team === 'СКА 1946'
                                  ? 'bg-primary text-white'
                                  : 'bg-muted'
                              }`}
                            >
                              {team.position}
                            </span>
                          </td>
                          <td className="py-4 px-6 font-semibold">{team.team}</td>
                          <td className="py-4 px-4 text-center">{team.games}</td>
                          <td className="py-4 px-4 text-center text-green-600 font-medium">{team.wins}</td>
                          <td className="py-4 px-4 text-center text-yellow-600 font-medium">{team.draws}</td>
                          <td className="py-4 px-4 text-center text-red-600 font-medium">{team.losses}</td>
                          <td className="py-4 px-6 text-center">
                            <span className="text-xl font-bold text-primary">{team.points}</span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {activeSection === 'history' && (
          <div className="space-y-6 animate-fade-in">
            <h2 className="text-4xl font-bold text-primary mb-6">История клуба</h2>
            <Card>
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center flex-shrink-0">
                      <span className="font-bold text-primary">1946</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Основание клуба</h3>
                      <p className="text-muted-foreground">
                        Хоккейный клуб СКА 1946 был основан в виртуальной федеральной хоккейной лиге VFHL.
                        С момента основания команда показывает стабильные результаты и борется за лидерство в турнирной таблице.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                      <Icon name="Trophy" size={24} className="text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Достижения</h3>
                      <p className="text-muted-foreground">
                        Команда регулярно занимает места в тройке лидеров лиги, демонстрируя высокий уровень игры
                        и командный дух. Наши игроки входят в число лучших бомбардиров и ассистентов сезона.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {activeSection === 'contacts' && (
          <div className="space-y-6 animate-fade-in">
            <h2 className="text-4xl font-bold text-primary mb-6">Контакты</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="hover-scale">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Icon name="MapPin" size={24} className="mr-3 text-primary" />
                    Адрес
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">VFHL Arena, Виртуальный город</p>
                </CardContent>
              </Card>

              <Card className="hover-scale">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Icon name="Mail" size={24} className="mr-3 text-primary" />
                    Email
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">info@ska1946.vfhl</p>
                </CardContent>
              </Card>

              <Card className="hover-scale">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Icon name="Phone" size={24} className="mr-3 text-primary" />
                    Телефон
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">+7 (XXX) XXX-XX-XX</p>
                </CardContent>
              </Card>

              <Card className="hover-scale">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Icon name="Globe" size={24} className="mr-3 text-primary" />
                    Социальные сети
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex space-x-4">
                    <Button variant="outline" size="icon">
                      <Icon name="Facebook" size={20} />
                    </Button>
                    <Button variant="outline" size="icon">
                      <Icon name="Twitter" size={20} />
                    </Button>
                    <Button variant="outline" size="icon">
                      <Icon name="Instagram" size={20} />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        )}
      </main>

      <footer className="bg-primary text-white mt-16 py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-lg font-semibold mb-2">СКА 1946</p>
          <p className="text-sm text-blue-200">VFHL League © 2024</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
