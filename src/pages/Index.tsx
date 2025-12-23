import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Registration form submitted:', formData);
    alert('Спасибо за регистрацию! Мы свяжемся с вами в ближайшее время.');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-primary">TOUR LAND SCHOOL</div>
          <nav className="hidden md:flex gap-6">
            <a href="#about" className="text-foreground hover:text-primary transition-colors">О курсе</a>
            <a href="#program" className="text-foreground hover:text-primary transition-colors">Программа</a>
            <a href="#pricing" className="text-foreground hover:text-primary transition-colors">Тарифы</a>
            <a href="#success" className="text-foreground hover:text-primary transition-colors">Успехи</a>
            <a href="#contacts" className="text-foreground hover:text-primary transition-colors">Контакты</a>
          </nav>
          <Button asChild>
            <a href="#registration">Записаться</a>
          </Button>
        </div>
      </header>

      <section className="pt-32 pb-20 px-4 bg-background relative overflow-hidden">
        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-6">
              Старт потока: 15 января 2025
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-foreground">
              Профессия<br/>Онлайн-Турагент
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-3xl mx-auto">
              Курс выстроен с нуля и не требует опыта в туризме. Работайте из любой точки мира и получайте доход от продажи путешествий
            </p>
            <Button size="lg" className="text-lg px-8 py-6 h-auto" asChild>
              <a href="#registration">Хочу стать турагентом</a>
            </Button>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16">
            <div className="bg-white rounded-2xl p-6 text-center shadow-sm hover:shadow-md transition-shadow">
              <Icon name="MonitorPlay" size={40} className="text-primary mx-auto mb-3" />
              <p className="font-semibold text-sm">Онлайн формат</p>
            </div>
            <div className="bg-white rounded-2xl p-6 text-center shadow-sm hover:shadow-md transition-shadow">
              <Icon name="Briefcase" size={40} className="text-primary mx-auto mb-3" />
              <p className="font-semibold text-sm">Работа во время обучения</p>
            </div>
            <div className="bg-white rounded-2xl p-6 text-center shadow-sm hover:shadow-md transition-shadow">
              <Icon name="TrendingUp" size={40} className="text-primary mx-auto mb-3" />
              <p className="font-semibold text-sm">Результаты учеников</p>
            </div>
            <div className="bg-white rounded-2xl p-6 text-center shadow-sm hover:shadow-md transition-shadow">
              <Icon name="Award" size={40} className="text-primary mx-auto mb-3" />
              <p className="font-semibold text-sm">Сертификат по окончании</p>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-12">О курсе</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="GraduationCap" size={24} className="text-primary" />
                </div>
                <CardTitle>Практические навыки</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Получите реальные навыки работы с туристическими системами и клиентами
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Globe" size={24} className="text-primary" />
                </div>
                <CardTitle>Онлайн обучение</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Учитесь из любой точки мира в удобное для вас время
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Award" size={24} className="text-primary" />
                </div>
                <CardTitle>Сертификат</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  По окончании курса вы получите сертификат специалиста
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="program" className="py-20 px-4 bg-muted/50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold text-center mb-12">Программа обучения</h2>
          <div className="space-y-4">
            {[
              {
                title: 'Модуль 1: Основы туризма',
                duration: '2 недели',
                topics: ['Виды туризма', 'Туристическая география', 'Визовые режимы', 'Страхование']
              },
              {
                title: 'Модуль 2: Работа с системами бронирования',
                duration: '3 недели',
                topics: ['Amadeus', 'Sabre', 'Online системы бронирования', 'Работа с отелями']
              },
              {
                title: 'Модуль 3: Взаимодействие с клиентами',
                duration: '2 недели',
                topics: ['Психология продаж', 'Коммуникация', 'Работа с возражениями', 'CRM системы']
              },
              {
                title: 'Модуль 4: Маркетинг и продвижение',
                duration: '2 недели',
                topics: ['Социальные сети', 'Контент-маркетинг', 'Email-рассылки', 'Реклама']
              },
              {
                title: 'Модуль 5: Практика',
                duration: '3 недели',
                topics: ['Реальные кейсы', 'Стажировка', 'Менторство', 'Итоговый проект']
              }
            ].map((module, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="flex justify-between items-center">
                    <span>{module.title}</span>
                    <span className="text-sm font-normal text-muted-foreground">{module.duration}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="grid md:grid-cols-2 gap-2">
                    {module.topics.map((topic, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <Icon name="Check" size={16} className="text-primary" />
                        <span className="text-sm">{topic}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="pricing" className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Тарифы обучения</h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">Выберите подходящий формат обучения</p>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-xl transition-all border-2">
              <CardHeader>
                <CardTitle className="text-2xl">Базовый</CardTitle>
                <CardDescription>Самостоятельное обучение</CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-foreground">39 900 ₽</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Доступ к видеолекциям на 6 месяцев</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Все учебные материалы</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Практические задания</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Сертификат об окончании</span>
                  </li>
                </ul>
                <Button className="w-full mt-6" variant="outline" asChild>
                  <a href="#registration">Выбрать тариф</a>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all border-2 border-primary relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white px-4 py-1 rounded-full text-sm font-semibold">
                Популярный
              </div>
              <CardHeader>
                <CardTitle className="text-2xl">Стандарт</CardTitle>
                <CardDescription>С поддержкой наставника</CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-foreground">59 900 ₽</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Всё из тарифа "Базовый"</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Еженедельные групповые вебинары</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Проверка домашних заданий</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Чат с кураторами</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Помощь в трудоустройстве</span>
                  </li>
                </ul>
                <Button className="w-full mt-6" asChild>
                  <a href="#registration">Выбрать тариф</a>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all border-2">
              <CardHeader>
                <CardTitle className="text-2xl">Premium</CardTitle>
                <CardDescription>Индивидуальное сопровождение</CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-foreground">89 900 ₽</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Всё из тарифа "Стандарт"</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Личный наставник на весь курс</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm">4 индивидуальные консультации</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Помощь в создании портфолио</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Доступ к закрытому клубу выпускников</span>
                  </li>
                </ul>
                <Button className="w-full mt-6" variant="outline" asChild>
                  <a href="#registration">Выбрать тариф</a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="success" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Успехи наших учеников</h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">Реальные истории выпускников курса</p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Мария Иванова',
                result: 'Доход 180 000 ₽/мес',
                text: 'Через 2 месяца после окончания курса я открыла свое турагентство. Сейчас работаю удаленно и получаю стабильный доход.',
                image: 'https://cdn.poehali.dev/projects/fd0eecdc-80c1-48b8-8635-d505979a453e/files/b226bce5-a44c-4fe6-91f2-21e667e1e0b3.jpg'
              },
              {
                name: 'Александр Смирнов',
                result: '15+ туров за 3 месяца',
                text: 'Курс дал мне все необходимые знания. Уже на обучении продал первые туры и получил комиссию.',
                image: 'https://cdn.poehali.dev/projects/fd0eecdc-80c1-48b8-8635-d505979a453e/files/b226bce5-a44c-4fe6-91f2-21e667e1e0b3.jpg'
              },
              {
                name: 'Ольга Козлова',
                result: 'Работа в TopTravel',
                text: 'Благодаря курсу устроилась в крупное турагентство. Школа помогла с трудоустройством и подготовкой к собеседованию.',
                image: 'https://cdn.poehali.dev/projects/fd0eecdc-80c1-48b8-8635-d505979a453e/files/b226bce5-a44c-4fe6-91f2-21e667e1e0b3.jpg'
              }
            ].map((success, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-video relative overflow-hidden bg-muted">
                  <img 
                    src={success.image} 
                    alt={success.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">{success.name}</CardTitle>
                  <div className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-semibold">
                    {success.result}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{success.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-4xl font-bold text-center mb-12">Часто задаваемые вопросы</h2>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>Какой формат обучения?</AccordionTrigger>
              <AccordionContent>
                Обучение проходит полностью онлайн. Вы получаете доступ к видеолекциям, текстовым материалам и практическим заданиям. Также проводятся еженедельные живые вебинары с преподавателями.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Сколько длится курс?</AccordionTrigger>
              <AccordionContent>
                Полная программа курса рассчитана на 12 недель. При необходимости вы можете учиться в своем темпе - доступ к материалам сохраняется в течение 6 месяцев.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Нужно ли специальное образование?</AccordionTrigger>
              <AccordionContent>
                Нет, специальное образование не требуется. Курс подходит для начинающих и тех, кто хочет сменить профессию. Главное - желание учиться и работать в туризме.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>Помогаете ли вы с трудоустройством?</AccordionTrigger>
              <AccordionContent>
                Да, мы помогаем нашим выпускникам с трудоустройством. У нас есть партнерские турагентства, которые регулярно ищут специалистов. Также мы обучаем, как начать свой бизнес.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger>Какой сертификат я получу?</AccordionTrigger>
              <AccordionContent>
                После успешного завершения курса и защиты итогового проекта вы получаете сертификат TOUR LAND SCHOOL о прохождении профессиональной программы "Онлайн турагент 2.0".
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      <section id="registration" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-2xl">
          <div className="text-center mb-8">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Начните карьеру в туризме</h2>
            <p className="text-lg text-muted-foreground">
              Оставьте заявку, и мы расскажем подробнее о курсе
            </p>
          </div>
          <Card className="shadow-xl">
            <CardContent className="pt-8 pb-8">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-base">Ваше имя *</Label>
                  <Input
                    id="name"
                    placeholder="Иван Иванов"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="h-12"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-base">Телефон *</Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+7 (999) 123-45-67"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="h-12"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-base">Email *</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="ivan@example.com"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="h-12"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message" className="text-base">Комментарий</Label>
                  <Textarea
                    id="message"
                    placeholder="Расскажите о своих целях в туризме..."
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                </div>
                <Button type="submit" size="lg" className="w-full h-14 text-lg">
                  Хочу стать турагентом
                </Button>
                <p className="text-xs text-center text-muted-foreground">
                  Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="contacts" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold text-center mb-12">Контакты</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Icon name="Mail" size={24} className="text-primary" />
                </div>
                <CardTitle>Email</CardTitle>
              </CardHeader>
              <CardContent>
                <a href="mailto:info@tourlandschool.com" className="text-primary hover:underline">
                  info@tourlandschool.com
                </a>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Icon name="Phone" size={24} className="text-primary" />
                </div>
                <CardTitle>Телефон</CardTitle>
              </CardHeader>
              <CardContent>
                <a href="tel:+79991234567" className="text-primary hover:underline">
                  +7 (999) 123-45-67
                </a>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Icon name="MessageCircle" size={24} className="text-primary" />
                </div>
                <CardTitle>Telegram</CardTitle>
              </CardHeader>
              <CardContent>
                <a href="https://t.me/tourlandschool" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                  @tourlandschool
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-foreground/5 py-8 px-4 border-t border-border">
        <div className="container mx-auto text-center">
          <div className="text-xl font-bold text-primary mb-4">TOUR LAND SCHOOL</div>
          <p className="text-sm text-muted-foreground">
            © 2024 Tour Land School. Все права защищены.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;