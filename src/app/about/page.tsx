import { ArrowRightIcon } from "@heroicons/react/24/solid";
import LogoIcon from "../components/logo-icons-name";
import AboutDesktopNavegationButton from "../components/about-desktop-navegation-button";
import {
	CheckBadgeIcon,
	CircleStackIcon,
	CloudIcon,
	CodeBracketIcon,
	DocumentTextIcon,
	PresentationChartBarIcon,
	PresentationChartLineIcon,
	TableCellsIcon,
} from "@heroicons/react/16/solid";

function AboutPage() {
	return (
		<div className="flex h-screen flex-col">
			<div className="flex h-screen">
				<div className="w-1/4 bg-slate-900 flex flex-col items-center text-gray-100">
					<div className="w-full p-5 flex flex-col items-center">
						<img
							src="/imagem-perfil-irl.png"
							alt="Foto do usuário"
							className="w-32 h-32 rounded-full mb-4 bg-slate-700"
						/>
						<h1 className="text-xl font-bold text-gray-200">
							IGOR RODRIGUES LAGE
						</h1>
						<p className="text-gray-400">Web Developer</p>
						<div className="mt-6 text-sm tracking-wide text-gray-500 text-center">
							FULLSTACK - BACKEND - DEVOPS - CLOUD
						</div>
					</div>

					{/* NAVEGATION BUTTONS */}
					<div className="bg-slate-800 w-full flex-grow pt-2">
						<AboutDesktopNavegationButton
							name="Resulm"
							icon={<DocumentTextIcon className="h-6" />}
							href="#resumo"
						/>
						<AboutDesktopNavegationButton
							name="Soft Skills"
							icon={<CheckBadgeIcon className="h-6" />}
							href="#skills"
						/>
						<AboutDesktopNavegationButton
							name="Productivity"
							icon={<PresentationChartLineIcon className="h-6" />}
							href="#productivity"
						/>
						<AboutDesktopNavegationButton
							name="Cloud, Build and automation"
							icon={<CloudIcon className="h-6" />}
							href="#cloud"
						/>
						<AboutDesktopNavegationButton
							name="Development"
							icon={<CodeBracketIcon className="h-6" />}
							href="#development"
						/>
						<AboutDesktopNavegationButton
							name="Database"
							icon={<CircleStackIcon className="h-6" />}
							href="#database"
						/>
						<AboutDesktopNavegationButton
							name="Professional History"
							icon={<TableCellsIcon className="h-6" />}
							href="#history"
						/>
					</div>
				</div>

				<div className="w-3/4 bg-slate-950 p-10 text-gray-200 overflow-y-scroll">
					{/* SESSÃO DE APRESENTAÇÃO */}
					<h1
						id="resumo"
						className="text-2xl font-bold mb-6 border-b border-gray-700 pb-2"
					>
						Resumo:
					</h1>
					<p className="text-lg leading-relaxed mb-8">
						Desenvolvedor Web com sólida experiência em arquitetura de software
						e implementação de padrões como DDD, Event-Driven Design, Clean
						Architecture e SOLID. Possuo expertise em testes automatizados,
						CI/CD, Kubernetes, Docker, Scrum e melhoria contínua de sistemas.
						Destaco-me pela colaboração efetiva em equipes, trabalhando para
						criar software que seja escalável, sustentável e altamente
						eficiente. Sou profundamente apaixonado por programação, encontrando
						imensa satisfação no ato de criar. Minha busca incessante por
						conhecimento me motiva a aplicar o que aprendo para simplificar as
						complexidades do mundo da tecnologia.
					</p>

					{/* Seção de Soft Skills */}
					<h2
						id="skills"
						className="text-2xl font-bold mb-6 border-b border-gray-700 pb-2"
					>
						Soft Skills:
					</h2>
					<ul className="list-disc list-inside text-lg leading-relaxed text-gray-300 mb-8">
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
						className="text-2xl font-bold mb-6 border-b border-gray-700 pb-2"
					>
						Productivity:
					</h2>
					<div className="flex flex-wrap mb-10 items-stretch">
						<div className="bg-slate-950 p-2 w-6 rounded-lg flex items-center justify-center">
							<span className="text-xs tracking-widest rotate-[270deg]">
								Agile
							</span>
						</div>
						<div className="flex flex-wrap">
							<LogoIcon alt="scrum" name="Scrum" src="scrum_logo.png" />
							<LogoIcon alt="kanban" name="Kanban" src="kanbanboard_logo.png" />
							<LogoIcon alt="devops" name="DevOps" src="devops_logo.png" />
							<LogoIcon
								alt="Azure DevOps"
								name="Azure DevOps"
								src="azure_devops_logo.png"
							/>
							<LogoIcon alt="github" name="gitActions" src="git_logo.png" />
						</div>
					</div>

					{/* Seção de Conhecimentos na Área de Desenvolvimento */}
					<h2
						id="cloud"
						className="text-2xl font-bold mb-2 border-b border-gray-700 pb-2"
					>
						Cloud, Build and automation:
					</h2>
					<div className="flex flex-wrap mb-2 items-stretch">
						<div className="bg-slate-950 p-2 w-6 rounded-lg flex items-center justify-center">
							<span className="text-xs tracking-widest rotate-[270deg]">
								Cloud
							</span>
						</div>
						<div className="flex flex-wrap">
							<LogoIcon
								alt="Google Cloud"
								name="Google Cloud"
								src="google_cloud_logo.png"
							/>
							<LogoIcon alt="AWS" name="AWS" src="aws_logo.png" />
							<LogoIcon alt="Azure" name="Azure" src="azure_logo.png" />
							<LogoIcon
								alt="terraform"
								name="Terraform"
								src="terraform_logo.png"
							/>
						</div>
					</div>
					<div className="flex flex-wrap mb-2 items-stretch">
						<div className="bg-slate-950 p-2 w-6 rounded-lg flex items-center justify-center">
							<span className="text-xs tracking-widest rotate-[270deg]">
								Containers
							</span>
						</div>
						<div className="flex flex-wrap">
							<LogoIcon alt="Docker" name="Docker" src="docker_logo.png" />
							<LogoIcon
								alt="Kubernetes"
								name="Kubernetes"
								src="kubernetes_logo.png"
							/>
						</div>
					</div>
					<div className="flex flex-wrap mb-2 items-stretch">
						<div className="bg-slate-950 p-2 w-6 rounded-lg flex items-center justify-center">
							<span className="text-xs tracking-widest rotate-[270deg]">
								Version
							</span>
						</div>
						<div className="flex flex-wrap">
							<LogoIcon alt="git" name="git" src="git_logo.png" />
							<LogoIcon alt="github" name="github" src="github_logo.png" />
						</div>
					</div>
					{/* Seção de Conhecimentos na Área de Desenvolvimento */}
					<h2
						id="development"
						className="mt-10 text-2xl font-bold mb-6 border-b border-gray-700 pb-2"
					>
						Development:
					</h2>
					<div className="flex flex-wrap mb-2 items-stretch">
						<div className="bg-slate-950 p-2 w-6 rounded-lg flex items-center justify-center">
							<span className="text-xs tracking-widest rotate-[270deg]">
								Messaging
							</span>
						</div>
						<div className="flex flex-wrap">
							<LogoIcon alt="Kafka" name="Kafka" src="apache_kafka_logo.png" />
							<LogoIcon alt="RabbiMQ" name="RabbiMQ" src="rabbitmq_logo.png" />
						</div>
					</div>
					<div className="flex flex-wrap mb-2 items-stretch">
						<div className="bg-slate-950 p-2 w-6 rounded-lg flex items-center justify-center">
							<span className="text-xs tracking-widest rotate-[270deg]">
								Go
							</span>
						</div>
						<div className="flex flex-wrap">
							<LogoIcon alt="golang" name="golang" src="golang_logo.png" />
						</div>
					</div>
					<div className="flex flex-wrap mb-2 items-stretch">
						<div className="bg-slate-950 p-2 w-6 rounded-lg flex items-center justify-center">
							<span className="text-xs tracking-widest rotate-[270deg]">
								NodeJS
							</span>
						</div>
						<div className="flex flex-wrap">
							<LogoIcon alt="node.js" name="node.js" src="nodejs_logo.png" />
							<LogoIcon
								alt="TypeScript"
								name="TypeScript"
								src="typescript_logo.png"
							/>
							<LogoIcon alt="NestJS" name="NestJS" src="nestjs_icon.png" />
							<LogoIcon alt="React" name="React" src="react_logo.png" />
							<LogoIcon alt="NextJS" name="NextJS" src="nextjs_icon.png" />
							<LogoIcon alt="Angular" name="Angular" src="angular_logo.png" />
							<LogoIcon
								alt="tailwind"
								name="tailwind"
								src="tailwind_logo.png"
							/>
						</div>
					</div>

					<div className="flex flex-wrap mb-2 items-stretch">
						<div className="bg-slate-950 p-2 w-6 rounded-lg flex items-center justify-center">
							<span className="text-xs tracking-widest rotate-[270deg]">
								PHP/html
							</span>
						</div>
						<div className="flex flex-wrap">
							<LogoIcon alt="php" name="php" src="php_logo.png" />
							<LogoIcon alt="apache" name="apache" src="apache_logo.png" />
							<LogoIcon alt="html" name="html" src="html_logo.png" />
							<LogoIcon alt="css" name="css" src="css_logo.png" />
							<LogoIcon
								alt="javascript"
								name="javascript"
								src="javascript_logo.png"
							/>
							<LogoIcon alt="jquery" name="jquery" src="jquery_logo.png" />
							<LogoIcon
								alt="bootstrap"
								name="bootstrap"
								src="bootstrap_logo.png"
							/>
							<LogoIcon
								alt="wordpress"
								name="wordpress"
								src="wordpress_logo.png"
							/>
						</div>
					</div>

					{/* Seção de Conhecimentos na Área de Desenvolvimento */}
					<h2
						id="database"
						className="mt-10 text-2xl font-bold mb-6 border-b border-gray-700 pb-2"
					>
						Database:
					</h2>

					<div className="flex flex-wrap mb-2 items-stretch">
						<div className="bg-slate-950 p-2 w-6 rounded-lg flex items-center justify-center">
							<span className="text-xs tracking-widest rotate-[270deg]">
								SQL
							</span>
						</div>
						<div className="flex flex-wrap">
							<LogoIcon alt="MySQL" name="MySQL" src="mysql_logo.png" />
							<LogoIcon
								alt="Postgres"
								name="Postgres"
								src="postgresql_logo.png"
							/>
							<LogoIcon alt="sqlite" name="sqlite" src="sqlite_logo.png" />
						</div>
					</div>

					<div className="flex flex-wrap mb-10 items-stretch">
						<div className="bg-slate-950 p-2 w-6 rounded-lg flex items-center justify-center">
							<span className="text-xs tracking-widest rotate-[270deg]">
								NoSQL
							</span>
						</div>
						<div className="flex flex-wrap">
							<LogoIcon alt="MongoDB" name="MongoDB" src="mongo_logo.png" />
							<LogoIcon alt="Redis" name="Redis" src="redis_logo.png" />
						</div>
					</div>

					{/* Histórico Profissional */}
					<h1
						id="history"
						className="text-2xl font-bold mb-6 border-b border-gray-700 pb-2"
					>
						Histórico Profissional
					</h1>
					<ul className="list-disc ml-6 mb-8 w-3/5">
						<li className="mb-6">
							<strong>Desenvolvedor Pleno - Excellent Sistemas</strong> (Desde
							fevereiro de 2024)
							<ul className="ml-4">
								<li>
									Obtenção de capacitação técnica contínua para implementar e
									estabelecer padrões de desenvolvimento de arquitetura de
									software como o uso de testes de unidade, testes de integração
									e testes end-to-end, DDD, Event Driven Design, Clean
									Architecture, Ports and Adapters, SOLID, CI e CD.
								</li>
								<li>
									Com o auxílio da equipe, analiso novas estratégias e modelamos
									os padrões de arquitetura já adotados para criar softwares
									sustentáveis, escaláveis, rentáveis e que agreguem valor para
									a empresa, clientes e desenvolvedores.
								</li>
								<li>
									Refatoração de projetos para incluir as modelagens de designer
									e arquiteturas adotadas.
								</li>
								<li>
									Outras responsabilidades envolvem:
									<ul className="ml-4">
										<li>
											Planejar atividades e etapas de construção das aplicações
											e atualizar o progresso do desenvolvimento no Azure
											DevOps.
										</li>
										<li>
											Participar de reuniões com a equipe e gerência para
											apresentar o progresso do desenvolvimento.
										</li>
										<li>
											Planejar aplicações backend com o auxílio do Event
											Storming.
										</li>
										<li>
											Implementação de ferramentas e padrões de observabilidade
											e saúde das aplicações.
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

						<li className="mb-6">
							<strong>Desenvolvedor Júnior - Excellent Sistemas</strong> (De
							junho de 2022 à janeiro de 2024)
							<ul className="ml-4">
								<li>
									Elaboração e desenvolvimento de novas funcionalidades para o
									sistema PHP, seguindo as atividades planejadas.
								</li>
								<li>
									Atendimento de solicitações para correção de erros do sistema.
								</li>
								<li>
									Capacitação e desenvolvimento de aplicações RESTful Back End
									em Node.js e Golang para apoiar a aplicação monolítica PHP.
								</li>
								<li>
									Criação de uma ferramenta de CRM de apoio para a área
									comercial da empresa (Front End em Angular e Back End em
									NestJS).
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
									Capacitação para desenvolvimento e implantação de
									infraestrutura DevOps.
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

						<li className="mb-6">
							<strong>Desenvolvedor Web Autônomo</strong> (2019 - 2022)
							<ul className="ml-4">
								<li>
									Desenvolvimento de sites e aplicações web sob demanda para
									pequenos negócios e clientes individuais.
								</li>
							</ul>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
}

export default AboutPage;
