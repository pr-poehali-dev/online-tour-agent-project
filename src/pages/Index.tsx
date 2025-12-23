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
            <a href="#teachers" className="text-foreground hover:text-primary transition-colors">Преподаватели</a>
            <a href="#reviews" className="text-foreground hover:text-primary transition-colors">Отзывы</a>
            <a href="#faq" className="text-foreground hover:text-primary transition-colors">FAQ</a>
            <a href="#contacts" className="text-foreground hover:text-primary transition-colors">Контакты</a>
          </nav>
          <Button asChild>
            <a href="#registration">Записаться</a>
          </Button>
        </div>
      </header>

      <section className="pt-32 pb-20 px-4 bg-gradient-to-br from-primary/5 to-accent/10 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://cdn.poehali.dev/projects/fd0eecdc-80c1-48b8-8635-d505979a453e/files/9a3af210-cbaf-4cc0-9c7b-9811b65f5da8.jpg" 
            alt="Travel Agent Course"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto text-center max-w-4xl relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-foreground">
            Онлайн турагент 2.0
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8">
            Профессиональный курс для тех, кто хочет построить успешную карьеру в туризме
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <a href="#registration">Начать обучение</a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="#program">Узнать больше</a>
            </Button>
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

      <section id="teachers" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-12">Наши преподаватели</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Елена Соколова',
                role: 'Основатель школы',
                experience: '15 лет в туризме',
                description: 'Эксперт в области международного туризма, автор образовательных программ'
              },
              {
                name: 'Дмитрий Волков',
                role: 'Руководитель практики',
                experience: '12 лет в туризме',
                description: 'Специалист по системам бронирования и организации туров'
              },
              {
                name: 'Анна Петрова',
                role: 'Маркетолог',
                experience: '8 лет в digital',
                description: 'Эксперт по продвижению туристических услуг в интернете'
              }
            ].map((teacher, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-32 h-32 bg-primary/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Icon name="User" size={64} className="text-primary" />
                  </div>
                  <CardTitle>{teacher.name}</CardTitle>
                  <CardDescription>{teacher.role}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm font-semibold text-primary mb-2">{teacher.experience}</p>
                  <p className="text-sm text-muted-foreground">{teacher.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="reviews" className="py-20 px-4 bg-muted/50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-12">Отзывы студентов</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                name: 'Мария Иванова',
                text: 'Курс полностью изменил мою жизнь! Через 2 месяца после окончания я уже работаю турагентом и получаю стабильный доход.',
                rating: 5
              },
              {
                name: 'Александр Смирнов',
                text: 'Отличная программа, квалифицированные преподаватели. Особенно понравилась практическая часть с реальными кейсами.',
                rating: 5
              },
              {
                name: 'Ольга Козлова',
                text: 'Я давно мечтала работать в туризме. Этот курс дал мне все необходимые знания и уверенность для старта карьеры.',
                rating: 5
              },
              {
                name: 'Игорь Морозов',
                text: 'Удобный формат обучения, можно совмещать с работой. Материалы структурированы, поддержка на высшем уровне.',
                rating: 5
              }
            ].map((review, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <Icon name="User" size={24} className="text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">{review.name}</CardTitle>
                      <div className="flex gap-1">
                        {[...Array(review.rating)].map((_, i) => (
                          <Icon key={i} name="Star" size={16} className="text-yellow-500 fill-yellow-500" />
                        ))}
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{review.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="py-20 px-4">
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

      <section id="registration" className="py-20 px-4 bg-gradient-to-br from-primary/5 to-accent/10">
        <div className="container mx-auto max-w-2xl">
          <h2 className="text-4xl font-bold text-center mb-4">Записаться на курс</h2>
          <p className="text-center text-muted-foreground mb-8">
            Заполните форму, и мы свяжемся с вами для обсуждения деталей
          </p>
          <Card>
            <CardContent className="pt-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Ваше имя *</Label>
                  <Input
                    id="name"
                    placeholder="Иван Иванов"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="ivan@example.com"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Телефон *</Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+7 (999) 123-45-67"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Комментарий</Label>
                  <Textarea
                    id="message"
                    placeholder="Расскажите о себе и своих целях..."
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                </div>
                <Button type="submit" size="lg" className="w-full">
                  Отправить заявку
                </Button>
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