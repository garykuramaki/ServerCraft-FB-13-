import { supabase } from './supabase.js';

document.getElementById('serverForm').addEventListener('submit', async function(e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const ram = parseInt(document.getElementById('ram').value);
    const cpu = parseInt(document.getElementById('cpu').value);
    const gpu = document.getElementById('gpu').value;
    const storage = parseInt(document.getElementById('storage').value);
    const autoStart = document.getElementById('autoStart').checked;

    const { data, error } = await supabase.from('servers').insert([{ name, ram, cpu, gpu, storage, autoStart }]);
    if (error) {
        alert('حدث خطأ: ' + error.message);
    } else {
        alert('تمت إضافة السيرفر بنجاح');
        loadServers();
    }
});

async function loadServers() {
    const { data: servers, error } = await supabase.from('servers').select('*').order('created_at', { ascending: false });
    const list = document.getElementById('serversList');
    list.innerHTML = '';
    servers.forEach(server => {
        const div = document.createElement('div');
        div.textContent = `🖥️ ${server.name} | RAM: ${server.ram}GB | CPU: ${server.cpu} نواة | GPU: ${server.gpu} | تخزين: ${server.storage}GB | تشغيل تلقائي: ${server.autoStart ? 'نعم' : 'لا'}`;
        list.appendChild(div);
    });
}

loadServers();
