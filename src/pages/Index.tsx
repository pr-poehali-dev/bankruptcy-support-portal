import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import Icon from '@/components/ui/icon';

const Index = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Заявка отправлена",
      description: "Мы свяжемся с вами в ближайшее время для бесплатной консультации",
    });
    setFormData({ name: '', phone: '', email: '', message: '' });
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen">
      <header className="bg-primary text-primary-foreground py-4 sticky top-0 z-50 shadow-md">
        <nav className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Icon name="Scale" size={28} className="text-accent" />
              <span className="text-xl font-bold">ЮрБанкротство</span>
            </div>
            <div className="hidden md:flex gap-6">
              <button onClick={() => scrollToSection('services')} className="hover:text-accent transition-colors">Услуги</button>
              <button onClick={() => scrollToSection('process')} className="hover:text-accent transition-colors">Процедура</button>
              <button onClick={() => scrollToSection('consultation')} className="hover:text-accent transition-colors">Консультация</button>
              <button onClick={() => scrollToSection('contacts')} className="hover:text-accent transition-colors">Контакты</button>
            </div>
            <Button onClick={() => scrollToSection('consultation')} className="bg-accent text-accent-foreground hover:bg-accent/90">
              Бесплатная консультация
            </Button>
          </div>
        </nav>
      </header>

      <section className="bg-gradient-to-br from-primary to-primary/90 text-primary-foreground py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Профессиональное сопровождение процедуры банкротства
            </h1>
            <p className="text-xl mb-8 opacity-90">
              Юридическая защита ваших интересов на всех этапах. Опыт более 10 лет, 500+ успешных дел
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                onClick={() => scrollToSection('consultation')}
                className="bg-accent text-accent-foreground hover:bg-accent/90 text-lg px-8"
              >
                Получить консультацию
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                onClick={() => scrollToSection('services')}
                className="border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary text-lg px-8"
              >
                Узнать подробнее
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-8 pb-6">
                <div className="flex justify-center mb-4">
                  <Icon name="Award" size={48} className="text-accent" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Опыт 10+ лет</h3>
                <p className="text-muted-foreground">Успешное сопровождение более 500 процедур банкротства</p>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-8 pb-6">
                <div className="flex justify-center mb-4">
                  <Icon name="Shield" size={48} className="text-accent" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Полная защита</h3>
                <p className="text-muted-foreground">Защита от кредиторов и незаконных требований</p>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-8 pb-6">
                <div className="flex justify-center mb-4">
                  <Icon name="FileCheck" size={48} className="text-accent" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Все документы</h3>
                <p className="text-muted-foreground">Полная подготовка и сопровождение документооборота</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Наши услуги</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="flex gap-4">
                  <Icon name="Users" size={32} className="text-accent flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold mb-3">Банкротство физических лиц</h3>
                    <p className="text-muted-foreground mb-4">
                      Полное юридическое сопровождение процедуры банкротства физических лиц. 
                      Подготовка документов, представительство в суде, работа с финансовым управляющим.
                    </p>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <Icon name="Check" size={16} className="text-accent mt-0.5" />
                        <span>Анализ финансовой ситуации</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Icon name="Check" size={16} className="text-accent mt-0.5" />
                        <span>Подготовка заявления в суд</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Icon name="Check" size={16} className="text-accent mt-0.5" />
                        <span>Представительство интересов</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="flex gap-4">
                  <Icon name="Building2" size={32} className="text-accent flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold mb-3">Банкротство юридических лиц</h3>
                    <p className="text-muted-foreground mb-4">
                      Комплексное сопровождение процедуры банкротства предприятий. 
                      Разработка стратегии, проведение процедур наблюдения и конкурсного производства.
                    </p>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <Icon name="Check" size={16} className="text-accent mt-0.5" />
                        <span>Оценка активов и обязательств</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Icon name="Check" size={16} className="text-accent mt-0.5" />
                        <span>Ведение процедур наблюдения</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Icon name="Check" size={16} className="text-accent mt-0.5" />
                        <span>Защита интересов кредиторов</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="flex gap-4">
                  <Icon name="Gavel" size={32} className="text-accent flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold mb-3">Судебное представительство</h3>
                    <p className="text-muted-foreground mb-4">
                      Защита ваших интересов во всех судебных инстанциях. 
                      Опытные юристы обеспечат профессиональное ведение дела.
                    </p>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <Icon name="Check" size={16} className="text-accent mt-0.5" />
                        <span>Участие во всех судебных заседаниях</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Icon name="Check" size={16} className="text-accent mt-0.5" />
                        <span>Подготовка процессуальных документов</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="flex gap-4">
                  <Icon name="FileText" size={32} className="text-accent flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold mb-3">Консультации и анализ</h3>
                    <p className="text-muted-foreground mb-4">
                      Предварительная оценка возможности и перспектив банкротства. 
                      Детальный анализ вашей ситуации и разработка оптимальной стратегии.
                    </p>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <Icon name="Check" size={16} className="text-accent mt-0.5" />
                        <span>Бесплатная первичная консультация</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Icon name="Check" size={16} className="text-accent mt-0.5" />
                        <span>Расчет сроков и стоимости процедуры</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="process" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Процедура банкротства</h2>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {[
                {
                  step: '1',
                  title: 'Консультация и анализ',
                  description: 'Бесплатная консультация юриста, анализ вашей финансовой ситуации, оценка перспектив банкротства и расчет сроков проведения процедуры.'
                },
                {
                  step: '2',
                  title: 'Подготовка документов',
                  description: 'Сбор необходимых документов, подготовка заявления о признании банкротом, формирование пакета документов для суда.'
                },
                {
                  step: '3',
                  title: 'Подача заявления в суд',
                  description: 'Подача заявления в арбитражный суд, оплата госпошлины, внесение депозита на оплату услуг финансового управляющего.'
                },
                {
                  step: '4',
                  title: 'Судебное разбирательство',
                  description: 'Участие в судебных заседаниях, представление интересов клиента, работа с финансовым управляющим и кредиторами.'
                },
                {
                  step: '5',
                  title: 'Реструктуризация или реализация',
                  description: 'Проведение процедуры реструктуризации долгов или реализации имущества в зависимости от решения суда.'
                },
                {
                  step: '6',
                  title: 'Завершение процедуры',
                  description: 'Получение определения суда о завершении процедуры банкротства и освобождении от обязательств перед кредиторами.'
                }
              ].map((item) => (
                <Card key={item.step} className="hover:shadow-lg transition-all hover:translate-x-2">
                  <CardContent className="pt-6">
                    <div className="flex gap-6">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 rounded-full bg-accent text-accent-foreground flex items-center justify-center text-xl font-bold">
                          {item.step}
                        </div>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                        <p className="text-muted-foreground">{item.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="consultation" className="py-20 bg-gradient-to-br from-primary to-primary/90 text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-4xl font-bold mb-4">Бесплатная консультация</h2>
              <p className="text-lg opacity-90">
                Оставьте заявку, и наш специалист свяжется с вами в течение 30 минут
              </p>
            </div>
            <Card>
              <CardContent className="pt-6">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Input
                      placeholder="Ваше имя *"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="bg-background"
                    />
                  </div>
                  <div>
                    <Input
                      placeholder="Телефон *"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      required
                      className="bg-background"
                    />
                  </div>
                  <div>
                    <Input
                      placeholder="Email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="bg-background"
                    />
                  </div>
                  <div>
                    <Textarea
                      placeholder="Кратко опишите вашу ситуацию"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      rows={4}
                      className="bg-background"
                    />
                  </div>
                  <Button type="submit" className="w-full bg-accent text-accent-foreground hover:bg-accent/90" size="lg">
                    Получить консультацию
                  </Button>
                  <p className="text-xs text-center text-muted-foreground">
                    Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Контакты</h2>
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
            <Card>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Icon name="MapPin" size={24} className="text-accent mt-1" />
                    <div>
                      <h3 className="font-semibold mb-1">Адрес</h3>
                      <p className="text-muted-foreground">г. Москва, ул. Примерная, д. 1, офис 100</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="Phone" size={24} className="text-accent mt-1" />
                    <div>
                      <h3 className="font-semibold mb-1">Телефон</h3>
                      <p className="text-muted-foreground">+7 (495) 123-45-67</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="Mail" size={24} className="text-accent mt-1" />
                    <div>
                      <h3 className="font-semibold mb-1">Email</h3>
                      <p className="text-muted-foreground">info@urbankrotstvo.ru</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="Clock" size={24} className="text-accent mt-1" />
                    <div>
                      <h3 className="font-semibold mb-1">Режим работы</h3>
                      <p className="text-muted-foreground">Пн-Пт: 9:00 - 19:00<br />Сб-Вс: 10:00 - 16:00</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <h3 className="font-semibold mb-4 text-lg">Напишите нам</h3>
                <form className="space-y-4">
                  <Input placeholder="Ваше имя" className="bg-background" />
                  <Input placeholder="Email" type="email" className="bg-background" />
                  <Textarea placeholder="Сообщение" rows={4} className="bg-background" />
                  <Button className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
                    Отправить
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-primary text-primary-foreground py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <Icon name="Scale" size={24} className="text-accent" />
              <span className="font-semibold">ЮрБанкротство</span>
            </div>
            <div className="text-center md:text-left">
              <p className="text-sm opacity-80">© 2024 ЮрБанкротство. Все права защищены.</p>
            </div>
            <div className="flex gap-4">
              <a href="#" className="hover:text-accent transition-colors">
                <Icon name="MessageCircle" size={20} />
              </a>
              <a href="#" className="hover:text-accent transition-colors">
                <Icon name="Phone" size={20} />
              </a>
              <a href="#" className="hover:text-accent transition-colors">
                <Icon name="Mail" size={20} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
