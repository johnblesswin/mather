/*
 * zzllrr Mather
 * zzllrr@gmail
 * Released under MIT License
 */


wiki['Prime Structure']=Kx(


detail('素数表'+num('1" id="primeBegin',1,50000)+'~'+num('100" id="primeEnd',1,50000)+'<label>'+strchkbx0+'id=primeNO />序号</label>'+
	'<select id=primeform>'+Options(['form','binary','binary2'],['形式','二进制','二进制1-[01]*1']).join('')+'</select>',
	'<div id=primes>'+dc)+

detail('素数结构表 '+zx(kxo('ab')),Table([['截尾a','末位b=1','末位b=3','末位b=7','末位b=9','编码','16进制']],PrimeAlist(1500)
/*[
		[1,1,3,7,9],[2,'',3,'',9],[3,1,'',7,''],[4,1,3,7,''],[5,'',3,'',9],[6,1,'',7,''],[7,1,3,'',9],[8,'',3,'',9],[9,'','',7,''],[10,1,3,7,9],[11,'',3,'',''],[12,'','',7,''],[13,1,'',7,9]
	].concat(PrimeAlist(1000))
	*/
	,'TBrc wiki'))+
detail('素数结构表 '+zx('∏p_i+p'),Table([['分布','表格结构','表格区域素数个数','备注']],[
	[Table('',[[2,1],[1,3],[2,5]],'TBI1J1'),'','',''],
	[Table('',[['2⋅3',1,5],[1,7,11],[2,13,17],[3,19,23],[4,scbox('25='+msup(5,2)),29],
		//[5,31,scbox('35=5⋅7')],[6,37,41],[7,43,47],[8,scbox('49='+msup(7,2)),53],[9,scbox('55=5⋅11'),59]
		
		],'TBI1J1')
			
		+Table('',[['2⋅3','±1'],[1,'5,7'],[2,'11,13'],[3,'17,19'],[4,'23'],[5,'29,31'],[6,'37'],[7,'41,43'],[8,'47'],[9,'53'],[10,'59,61'],
				],'TBI1J1')
			,'','',''],
	
		
	[Table('',[['2⋅3⋅5',1,7,11,13,17,19,23,29],[1,31,37,41,43,47,scbox('49='+msup(7,2)),53,59],[2,61,67,71,73,scbox('77=7⋅11'),79,83,89],[3,scbox('91=7⋅13'),97,101,103,107,109,113,scbox('119=7⋅17')],
		[4,scbox('121='+msup(11,2)),127,131,scbox('133=7⋅19'),137,139,scbox('143=11⋅13'),149],[5,151,157,scbox('161=7⋅23'),163,167,scbox('169='+msup(13,2)),173,179],
		[6,181,scbox('187=11⋅17'),191,193,197,199,scbox('203=7⋅29'),scbox('209=11⋅19')],
	
		[7,211,scbox('7⋅31'),scbox('13⋅17'),223,227,229,233,239],//217 221
		[8,241,scbox('13⋅19'),251,scbox('11⋅23'),257,scbox('259=7⋅37'),263,269],//247 253 259
		[9,271,277,281,283,scbox('7⋅41'),scbox(msup(17,2)),293,scbox('13⋅23')],//287 289 299
		[10,scbox('7⋅43'),307,311,313,317,scbox('11⋅29'),scbox('17⋅19'),scbox('7⋅47')],//301 319 323 329
/*
[11,331,337,scbox('11⋅31'),scbox(7+sup(3)),347,349,353,359],
[12,scbox(19+sup(2)),367,scbox('7⋅53'),373,scbox('13⋅29'),379,383,389],


	var pA=[1,7,11,13,17,19,23,29],s='';
	for(var i=11;i<100;i++){
		var t=[i];
		for(var j=0;j<8;j++){
			var m=30*i+pA[j];
			if(isPrime(m)){
				t.push(m)
			}else{
				var FA=factorA(m),FA1=FA[1].join('');
				if(/[^1]/.test(FA1)){
					t.push("scbox("+concat(FA[0],Arrf(function(t){return t>1?'+sup('+t+')':''},FA[1])).join("+'⋅'+")+")")
					
				}else{
					t.push("scbox('"+FA[0].join('⋅')+"')")
				}
			}
		}
		s+='['+t+'],____'
	}
	console.log(s);
*/
		],'TBI1_7J1_5')
			+Table('',[['2⋅3⋅5','±1','±7','±11','±13'],[1,'29,31','23,37','19,41','17,43'],[2,'59,61','53,67','71','47,73'],
				[3,'89','83,97','79,101','103'],[4,'','113,127','109,131','107'],[5,'149,151','157','139','137,163'],
				[6,'179,181','173','191','167,193'],[7,'211','','199','197,223'],[8,'239,241','233','229,251','227']
				],'TBI1J1')
						,'','',''],
/*
	[
			Table([['2⋅3⋅5⋅7',1,11,13,17,19,23,29,31,37,41,43,47,53,59,61,67,71,73,79,83,89,97,101,103,107,109,113,scbox(msup(11,2)),127,131,137,139,scbox('11⋅13'),149,151,157,163,167,scbox(msup(13,2)),173,179,181,scbox('11⋅17'),191,193,197,199,scbox('11⋅19')],
[1,211,scbox('13⋅17'),223,227,229,233,239,241,scbox('13⋅19'),251,scbox('11⋅23'),257,263,269,271,277,281,283,scbox(msup(17,2)),293,scbox('13⋅23'),307,311,313,317,scbox('11⋅29'),scbox('17⋅19'),331,337,scbox('11⋅31'),347,349,353,359,scbox(msup(19,2)),367,373,scbox('13⋅29'),379,383,389,scbox('17⋅23'),397,401,scbox('13⋅31'),scbox('11⋅37'),409,419],
[2,421,431,433,scbox('19⋅23'),439,443,449,scbox('11⋅41'),457,461,463,467,scbox('11⋅43'),479,scbox('13⋅37'),487,491,scbox('17⋅29'),499,503,509,scbox('11⋅47'),521,523,scbox('17⋅31'),scbox(msup(23,2)),scbox('13⋅41'),541,547,scbox('19⋅29'),557,scbox('13⋅43'),563,569,571,577,scbox('11⋅53'),587,scbox('19⋅31'),593,599,601,607,scbox('13⋅47'),613,617,619,scbox('17⋅37')],
[3,631,641,643,647,scbox('11⋅59'),653,659,661,scbox('23⋅29'),scbox('11⋅61'),673,677,683,scbox('13⋅53'),691,scbox('17⋅41'),701,scbox('19⋅37'),709,scbox('23⋅31'),719,727,scbox('17⋅43'),733,scbox('11⋅67'),739,743,751,757,761,scbox('13⋅59'),769,773,scbox('19⋅41'),scbox('11⋅71'),787,scbox('13⋅61'),797,scbox('17⋅47'),scbox('11⋅73'),809,811,scbox('19⋅43'),821,823,827,829,839],
//[4,853,857,859,863,877,881,883,887,907,911,919,929,937,941,947,953,967,971,977,983,991,997]


		],'TBI1J1 scroll')+
	
			Table([['2⋅3⋅5⋅7','±1','±11','±13','±17','±19','±23','±29','±31','±37','±41','±43','±47','±53','±59','±61','±67','±71','±73','±79','±83','±89','±97','±101','±103'],
				[1,'211','109','197,223','193,227','191,229','233','181,239','179,241','173','251','167','163,257','157,263','151,269','149,271','277','139,281','137,283','131','127,293','','113,307','109,311','107,313'],
				[2,'419,421','409,431']
				],'TBI1J1')

					,'',''],
		
*/
//	[PrimeA(1000).join(' ').replace(/9 /g,'9____'),'','1000以内的素数']
//	var p=[2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59,61,67,71,73,79,83,89,97,101,103,107,109,113,127,131,137,139,149,151,157,163,167,173,179,181,191,193,197,199,211,223,227,229,233,239,241,251,257,263,269,271,277,281,283,293,307,311,313,317,331,337,347,349,353,359,367,373,379,383,389,397,401,409,419,421,431,433,439,443,449,457,461,463,467,479,487,491,499,503,509,521,523,541,547,557,563,569,571,577,587,593,599,601,607,613,617,619,631,641,643,647,653,659,661,673,677,683,691,701,709,719,727,733,739,743,751,757,761,769,773,787,797,809,811,821,823,827,829,839,853,857,859,863,877,881,883,887,907,911,919,929,937,941,947,953,967,971,977,983,991,997];

],'wiki'))+

detail('素数结构表 '+zx('2p_k+∏p_i'),Table([['奇素数>6','3','5','7','11','13','17','19','23','29','31','37','41','43','47','53','59','61','67','71','73','79','83','89','97','101','103']],
	[[7,1].concat(copyA('',24)),
	[11,5,1].concat(copyA('',24)),
	[13,7,3].concat(copyA('',24)),
	[17,11,7,3].concat(copyA('',24)),
	[19,13,'3^2',5].concat(copyA('',24)),
	[23,17,13,'3^2',1].concat(copyA('',24)),
	[29,23,19,'3⋅5',7,3].concat(copyA('',24)),
	[31,'5^2','3⋅7',17,'3^2',5].concat(copyA('',24)),
	[37,31,'3^3',23,'3⋅5',11,3].concat(copyA('',24)),
	[41,'5⋅7',31,'3^3',19,'3⋅5',7,3].concat(copyA('',24)),
	[43,37,'3⋅11',29,'3⋅7',17,'3^2',5].concat(copyA('',24)),
	[47,41,37,'3⋅11','5^2','3⋅7',13,'$3^2$',1].concat(copyA('',24)),
	

	]

	,'TBrc wiki'))

/*
	Rowland's recurrence数列，相邻项之差的数列，只由1和素数构成
a(n) = a(n - 1) + GCD(n, a(n - 1)) where a(1)=7（经尝试，a(1)>=4时，都可以得到此性质）
	
	Rowland proves that each term is prime. He says it is likely that all odd primes occur.


n n+1 an gcd(n+1,an)
1 2 7 1
2 3 8 1
3 4 9 1
4 5 10 5
5 6 15 3
6 7 18 1
7 8 19 1

a1=7时，得到数列：7，8，9，10，15，18。。。


a1=1时，得到数列：1，2，3，4，。。。
n n+1 an gcd(n+1,an)
1 2 1 1
2 3 2 1
3 4 3 1
4 5 4 1
5 6 5 1
6 7 6 1
7 8 7 1
8 9 8 1
9 10 9 1
10 11 10 1
11 12 11 1
12 13 12 1
13 14 13 1


a1=2时，得到数列：2，3，4，5，。。。
a1=3时，得到数列：3，4，5，。。。
a1=4时，得到数列：4，6，9，10，15，18。。。

n n+1 an gcd(n+1,an)
1 2 4 2
2 3 6 3
3 4 9 1
4 5 10 5
5 6 15 3
6 7 18 1

a1=5时，得到数列：5，6，9，10，15，18。。。
n n+1 an gcd(n+1,an)
1 2 5 1
2 3 6 3
3 4 9 1
4 5 10 5
5 6 15 3
6 7 18 1

a1=6时，得到数列：6，8，9，10，15，18。。。
n n+1 an gcd(n+1,an)
1 2 6 2
2 3 8 1
3 4 9 1
4 5 10 5
5 6 15 3
6 7 18 1


a1=8时，得到数列：8，9，10，15，18。。。
n n+1 an gcd(n+1,an)
1 2 8 2
2 3 10 1
3 4 11 1
4 5 12 1
5 6 13 1
6 7 14 7
7 8 21 1
8 9 22 1
9 10 23 1
10 11 24 1
11 12 25 1
12 13 26 13
13 14 39 1
14 15 40 5
15 16 45 1
16 17 46 1
17 18 47 1
18 19 48 1
19 20 49 1
20 21 50 1
21 22 51 1
22 23 52 1
23 24 53 1
24 25 54 1
25 26 55 1
26 27 56 1
27 28 57 1
28 29 58 29
29 30 87 3
30 31 90 1
31 32 91 1
32 33 92 1
33 34 93 1
34 35 94 1
35 36 95 1
36 37 96 1
37 38 97 1
38 39 98 1
39 40 99 1
40 41 100 1
41 42 101 1
42 43 102 1
43 44 103 1
44 45 104 1
45 46 105 1
46 47 106 1
47 48 107 1
48 49 108 1
49 50 109 1
50 51 110 1
51 52 111 1
52 53 112 1
53 54 113 1
54 55 114 1
55 56 115 1
56 57 116 1
57 58 117 1
58 59 118 59
	
	
*/


);

$(function(){
	$('body').on('click change keyup','#primeN',function(){
		$('#primeNs').html(PrimeA(+$(this).val()||1).join('____'));

	}).on('click change keyup','#primeEnd',function(){

		var isNO=$('#primeNO').prop('checked'),a=+$('#primeBegin').val(),b=+$(this).val()||1;
		if(isNO){
			b=PrimeA(b,1);
			if(a>0){
				a=a-1;
			}
		}
		var A=PrimeA(b);
		if(!isNO){
			a=PrimeA(a).length;
		}
		var B=A.slice(a), f=$('#primeform').val();
		if(f=='form'){
			
		}else if(f=='binary'){
			B=Arrf(function(v){
				return v+' : '+(+v).toString(2)
			},B);
		}else if(f=='binary2'){
			B=Arrf(function(v){
				var v2=(+v).toString(2),n=v2.length;
				return v+' : '+('0'.repeat(n-1)+(parseInt(1+'0'.repeat(n),2)-(+v)).toString(2)).slice(1-n).substr(0,max([1,n-2]))
			},B);
		}
		$('#primes').html(B.join(br));
	})
	
});