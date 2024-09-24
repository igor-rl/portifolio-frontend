const ProfileInfo = () => (
  <div className="flex w-full flex-col items-center p-5">
    <img
      src="imagem-perfil-irl.png"
      alt="Foto do usuário"
      className="mb-4 h-32 w-32 rounded-full bg-slate-700"
    />
    <h1 className="text-xl font-bold text-gray-200">IGOR RODRIGUES LAGE</h1>
    <p className="text-gray-400">Web Developer</p>
    <div className="mt-6 text-center text-sm tracking-wide text-gray-500">
      FULLSTACK - BACKEND - DEVOPS - CLOUD
    </div>
  </div>
);

export default ProfileInfo;
