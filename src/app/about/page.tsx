import LogoIcon from '../components/logo-icons-name';
import ProfileInfo from '../components/about/ProfileInfo';
import LefthNavButtons from '../components/about/LefthNavButtons';

function AboutPage() {
  return (
    <div className="flex h-screen flex-col md:flex-row">
      <div className="flex w-full flex-col items-center bg-slate-900 text-gray-100 md:w-1/4">
        <ProfileInfo />
        <LefthNavButtons />
      </div>

      <div className="w-full bg-slate-950 p-10 text-gray-200 md:w-3/4 md:overflow-y-scroll">
        {/* SESSÃO DE APRESENTAÇÃO */}
        <h1
          id="resumo"
          className="mb-6 border-b border-gray-700 pb-2 text-2xl font-bold"
        >
          Resumo:
        </h1>
        <p className="mb-8 text-lg leading-relaxed">
          Desenvolvedor Web com sólida experiência em arquitetura de software e
          implementação de padrões como DDD, Event-Driven Design, Clean
          Architecture e SOLID. Possuo expertise em testes automatizados, CI/CD,
          Kubernetes, Docker, Scrum e melhoria contínua de sistemas. Destaco-me
          pela colaboração efetiva em equipes, trabalhando para criar software
          que seja escalável, sustentável e altamente eficiente. Sou
          profundamente apaixonado por programação, encontrando imensa
          satisfação no ato de criar. Minha busca incessante por conhecimento me
          motiva a aplicar o que aprendo para simplificar as complexidades do
          mundo da tecnologia.
        </p>

        {/* Seção de Soft Skills */}
        <h2
          id="skills"
          className="mb-6 border-b border-gray-700 pb-2 text-2xl font-bold"
        >
          Soft Skills:
        </h2>
        <ul className="mb-8 list-inside list-disc text-lg leading-relaxed text-gray-300">
          <li>Comunicação eficaz</li>
          <li>Trabalho em equipe</li>
          <li>Resolução de problemas</li>
          <li>Adaptabilidade</li>
          <li>Gestão de tempo</li>
          <li>Proatividade</li>
        </ul>

        {/* Seção de Conhecimentos na Área de Desenvolvimento */}
        <h2
          id="productivity"
          className="mb-6 border-b border-gray-700 pb-2 text-2xl font-bold"
        >
          Productivity:
        </h2>
        <div className="mb-10 flex flex-wrap items-stretch">
          <div className="flex w-6 items-center justify-center rounded-lg bg-slate-950 p-2">
            <span className="rotate-[270deg] text-xs tracking-widest">
              Agile
            </span>
          </div>
          <div className="flex flex-wrap">
            <LogoIcon alt="scrum" name="Scrum" src="icons/scrum_logo.png" />
            <LogoIcon
              alt="kanban"
              name="Kanban"
              src="icons/kanbanboard_logo.png"
            />
            <LogoIcon alt="devops" name="DevOps" src="icons/devops_logo.png" />
            <LogoIcon
              alt="Azure DevOps"
              name="Azure DevOps"
              src="icons/azure_devops_logo.png"
            />
            <LogoIcon alt="github" name="gitActions" src="icons/git_logo.png" />
          </div>
        </div>

        {/* Seção de Conhecimentos na Área de Desenvolvimento */}
        <h2
          id="cloud"
          className="mb-2 border-b border-gray-700 pb-2 text-2xl font-bold"
        >
          Cloud, Build and automation:
        </h2>
        <div className="mb-2 flex flex-wrap items-stretch">
          <div className="flex w-6 items-center justify-center rounded-lg bg-slate-950 p-2">
            <span className="rotate-[270deg] text-xs tracking-widest">
              Cloud
            </span>
          </div>
          <div className="flex flex-wrap">
            <LogoIcon
              alt="Google Cloud"
              name="Google Cloud"
              src="icons/google_cloud_logo.png"
            />
            <LogoIcon alt="AWS" name="AWS" src="icons/aws_logo.png" />
            <LogoIcon alt="Azure" name="Azure" src="icons/azure_logo.png" />
            <LogoIcon
              alt="terraform"
              name="Terraform"
              src="icons/terraform_logo.png"
            />
          </div>
        </div>
        <div className="mb-2 flex flex-wrap items-stretch">
          <div className="flex w-6 items-center justify-center rounded-lg bg-slate-950 p-2">
            <span className="rotate-[270deg] text-xs tracking-widest">
              Containers
            </span>
          </div>
          <div className="flex flex-wrap">
            <LogoIcon alt="Docker" name="Docker" src="icons/docker_logo.png" />
            <LogoIcon
              alt="Kubernetes"
              name="Kubernetes"
              src="icons/kubernetes_logo.png"
            />
          </div>
        </div>
        <div className="mb-2 flex flex-wrap items-stretch">
          <div className="flex w-6 items-center justify-center rounded-lg bg-slate-950 p-2">
            <span className="rotate-[270deg] text-xs tracking-widest">
              Version
            </span>
          </div>
          <div className="flex flex-wrap">
            <LogoIcon alt="git" name="git" src="icons/git_logo.png" />
            <LogoIcon alt="github" name="github" src="icons/github_logo.png" />
          </div>
        </div>
        {/* Seção de Conhecimentos na Área de Desenvolvimento */}
        <h2
          id="development"
          className="mb-6 mt-10 border-b border-gray-700 pb-2 text-2xl font-bold"
        >
          Development:
        </h2>
        <div className="mb-2 flex flex-wrap items-stretch">
          <div className="flex w-6 items-center justify-center rounded-lg bg-slate-950 p-2">
            <span className="rotate-[270deg] text-xs tracking-widest">
              Messaging
            </span>
          </div>
          <div className="flex flex-wrap">
            <LogoIcon
              alt="Kafka"
              name="Kafka"
              src="icons/apache_kafka_logo.png"
            />
            <LogoIcon
              alt="RabbiMQ"
              name="RabbiMQ"
              src="icons/rabbitmq_logo.png"
            />
          </div>
        </div>
        <div className="mb-2 flex flex-wrap items-stretch">
          <div className="flex w-6 items-center justify-center rounded-lg bg-slate-950 p-2">
            <span className="rotate-[270deg] text-xs tracking-widest">Go</span>
          </div>
          <div className="flex flex-wrap">
            <LogoIcon alt="golang" name="golang" src="icons/golang_logo.png" />
          </div>
        </div>
        <div className="mb-2 flex flex-wrap items-stretch">
          <div className="flex w-6 items-center justify-center rounded-lg bg-slate-950 p-2">
            <span className="rotate-[270deg] text-xs tracking-widest">
              NodeJS
            </span>
          </div>
          <div className="flex flex-wrap">
            <LogoIcon
              alt="node.js"
              name="node.js"
              src="icons/nodejs_logo.png"
            />
            <LogoIcon
              alt="TypeScript"
              name="TypeScript"
              src="icons/typescript_logo.png"
            />
            <LogoIcon alt="NestJS" name="NestJS" src="icons/nestjs_icon.png" />
            <LogoIcon alt="React" name="React" src="icons/react_logo.png" />
            <LogoIcon alt="NextJS" name="NextJS" src="icons/nextjs_icon.png" />
            <LogoIcon
              alt="Angular"
              name="Angular"
              src="icons/angular_logo.png"
            />
            <LogoIcon
              alt="tailwind"
              name="tailwind"
              src="icons/tailwind_logo.png"
            />
          </div>
        </div>

        <div className="mb-2 flex flex-wrap items-stretch">
          <div className="flex w-6 items-center justify-center rounded-lg bg-slate-950 p-2">
            <span className="rotate-[270deg] text-xs tracking-widest">
              PHP/html
            </span>
          </div>
          <div className="flex flex-wrap">
            <LogoIcon alt="php" name="php" src="icons/php_logo.png" />
            <LogoIcon alt="apache" name="apache" src="icons/apache_logo.png" />
            <LogoIcon alt="html" name="html" src="icons/html_logo.png" />
            <LogoIcon alt="css" name="css" src="icons/css_logo.png" />
            <LogoIcon
              alt="javascript"
              name="javascript"
              src="icons/javascript_logo.png"
            />
            <LogoIcon alt="jquery" name="jquery" src="icons/jquery_logo.png" />
            <LogoIcon
              alt="bootstrap"
              name="bootstrap"
              src="icons/bootstrap_logo.png"
            />
            <LogoIcon
              alt="wordpress"
              name="wordpress"
              src="icons/wordpress_logo.png"
            />
          </div>
        </div>

        {/* Seção de Conhecimentos na Área de Desenvolvimento */}
        <h2
          id="database"
          className="mb-6 mt-10 border-b border-gray-700 pb-2 text-2xl font-bold"
        >
          Database:
        </h2>

        <div className="mb-2 flex flex-wrap items-stretch">
          <div className="flex w-6 items-center justify-center rounded-lg bg-slate-950 p-2">
            <span className="rotate-[270deg] text-xs tracking-widest">SQL</span>
          </div>
          <div className="flex flex-wrap">
            <LogoIcon alt="MySQL" name="MySQL" src="icons/mysql_logo.png" />
            <LogoIcon
              alt="Postgres"
              name="Postgres"
              src="icons/postgresql_logo.png"
            />
            <LogoIcon alt="sqlite" name="sqlite" src="icons/sqlite_logo.png" />
          </div>
        </div>

        <div className="mb-10 flex flex-wrap items-stretch">
          <div className="flex w-6 items-center justify-center rounded-lg bg-slate-950 p-2">
            <span className="rotate-[270deg] text-xs tracking-widest">
              NoSQL
            </span>
          </div>
          <div className="flex flex-wrap">
            <LogoIcon alt="MongoDB" name="MongoDB" src="icons/mongo_logo.png" />
            <LogoIcon alt="Redis" name="Redis" src="icons/redis_logo.png" />
          </div>
        </div>

        {/* Histórico Profissional */}
        <h1
          id="history"
          className="mb-6 border-b border-gray-700 pb-2 text-2xl font-bold"
        >
          Histórico Profissional
        </h1>
        <ul className="mb-8 ml-6 w-3/5 list-disc space-y-8">
          {/* Desenvolvedor Pleno */}
          <li>
            <h2 className="text-lg font-semibold">
              Desenvolvedor Pleno - Excellent Sistemas
            </h2>
            <span className="text-sm text-gray-500">
              Desde fevereiro de 2024
            </span>
            <ul className="ml-4 mt-2 list-disc space-y-3 text-justify">
              <li>
                Obtenção de capacitação técnica contínua para implementar e
                estabelecer padrões de desenvolvimento de arquitetura de
                software como o uso de testes de unidade, testes de integração e
                testes end-to-end, DDD, Event Driven Design, Clean Architecture,
                Ports and Adapters, SOLID, CI e CD.
              </li>
              <li>
                Análise de novas estratégias e modelagem de padrões de
                arquitetura adotados, em colaboração com a equipe, para criar
                softwares sustentáveis, escaláveis e que agreguem valor para a
                empresa, clientes e desenvolvedores.
              </li>
              <li>
                Refatoração de projetos para incluir modelagens de design e
                arquiteturas adotadas.
              </li>
              <li>
                Outras responsabilidades:
                <ul className="ml-4 mt-1 list-disc space-y-2">
                  <li>
                    Planejar atividades e etapas de construção das aplicações e
                    atualizar o progresso do desenvolvimento no Azure DevOps.
                  </li>
                  <li>
                    Participar de reuniões com a equipe e gerência para
                    apresentar o progresso do desenvolvimento.
                  </li>
                  <li>
                    Planejar aplicações backend com o auxílio do Event Storming.
                  </li>
                  <li>
                    Implementação de ferramentas e padrões de observabilidade e
                    saúde das aplicações.
                  </li>
                  <li>Deploy de aplicações no Docker e Kubernetes.</li>
                  <li>Conduzir workshops e reuniões técnicas.</li>
                  <li>
                    Estabelecer padrões de arquitetura de desenvolvimento de
                    software.
                  </li>
                </ul>
              </li>
            </ul>
          </li>

          {/* Desenvolvedor Júnior */}
          <li>
            <h2 className="text-lg font-semibold">
              Desenvolvedor Júnior - Excellent Sistemas
            </h2>
            <span className="text-sm text-gray-500">
              Junho de 2022 - Janeiro de 2024
            </span>
            <ul className="ml-4 mt-2 list-disc space-y-3 text-justify">
              <li>
                Elaboração e desenvolvimento de novas funcionalidades para o
                sistema PHP, seguindo as atividades planejadas.
              </li>
              <li>
                Atendimento de solicitações para correção de erros do sistema.
              </li>
              <li>
                Capacitação e desenvolvimento de aplicações RESTful Back End em
                Node.js e Golang para apoiar a aplicação monolítica PHP.
              </li>
              <li>
                Criação de uma ferramenta de CRM de apoio para a área comercial
                da empresa (Front End em Angular e Back End em NestJS).
              </li>
              <li>
                Capacitação e desenvolvimento de infraestrutura GCP, incluindo
                Kubernetes em clusters no Google Cloud Provider.
              </li>
              <li>
                Capacitação e uso de ferramentas como ingress, NGINX, service
                mesh, Terraform, gerenciamento de certificados, etc.
              </li>
              <li>
                Capacitação para desenvolvimento e implantação de infraestrutura
                DevOps.
              </li>
              <li>
                Configuração e uso do Keycloak para autenticação única entre
                aplicações da empresa.
              </li>
              <li>Criação de pipelines CI/CD usando GitHub Actions.</li>
              <li>
                Modelagem de containers de aplicações Web com Docker, Docker
                Compose, Minikube e Kubernetes.
              </li>
            </ul>
          </li>

          {/* Desenvolvedor Web Autônomo */}
          <li>
            <h2 className="text-lg font-semibold">
              Desenvolvedor Web Autônomo
            </h2>
            <span className="text-sm text-gray-500">2019 - 2022</span>
            <ul className="ml-4 mt-2 list-disc space-y-3 text-justify">
              <li>
                Desenvolvimento de sites e aplicações web sob demanda para
                pequenos negócios e clientes individuais.
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default AboutPage;
