/*
 * zzllrr Mather
 * zzllrr@gmail
 * Released under MIT License
 */

wiki['Concept/Matrix/Unary Operation']=Kx(

detail('矩阵（一元运算）',Table([ZLR('名称 记法 定义 性质')],[
	ZLR('秩\nRank____'+khrA(['r(A)','R(A)','rank(A)'])+'____'+
		khrA(['初等变换化成阶梯型矩阵后\\\\ 的非零行的行数','最大阶非零子式的阶数','极大线性无关行（列）向量组中\\\\ 的向量个数：行（列）秩'])+'____'+
		kul(['行秩 = 列秩 = 秩','r(A) ≤ \\min(m,n) ≤ '+piece(['m','n']),
			kxA([piece(['r(A+B) = r(B+A)',
					'r(A-B) = r(B-A)',
					'r(kA + lB)',
					'r(A|B) 增广矩阵'
					],1)+' ≤ r(A) + r(B)',
				'证明：','前者向量组可由后者列向量组线性表示，','因此前者秩≤后者'
			]),
		
			'r(AB) ≤ \\min(r(A), r(B)) ≤ '+piece(['r(A)','r(B)'])+' ≤ r(A|B)',

			kxA(['r(ABC) ≥ r(AB) + r(BC) - r(B)',kbox('Frobenius(Sylvester)不等式'),
				'证明：','分块矩阵初等变换',
				'r(AB)+r(BC)',
				' = r'+zmtrx([['AB',0],[0,'BC']]),
				' ≤ r'+zmtrx([['AB',0],['B','BC']]),
				' = r'+zmtrx([[0,'-ABC'],['B','BC']]),
				' = r'+zmtrx([[0,'-ABC'],['B',0]]),
				' = r(B)+r(ABC)',
			]),
			kxA(['r(AC) ≥ r(A) + r(C) - n','证明：','上推，令B=I_n']),
			
			kxA(['AB=0（A、B可以不是方阵） ⇒ r(A)+r(B)≤n（A的列数）',
				'证明：','AB=0，考虑方程组Ax=0，','基础解系中向量个数是n-r(A)，','因此r(B)≤n-r(A)，','即r(A)+r(B)≤n']),
			kxA(['ABC=0且A列满秩，C行满秩 ⇒ B=0',
				'（其中A_{m×n}、B_{n×p}、C_{p×s}可以不是方阵）',
					'证明：','​ABC=0，',
					'则r(AB)+r(C)≤p，且r(A)+r(BC)≤n',
					'而r(A)=n, r(C)=p，',
					'则r(AB)+p≤p 且n+r(BC)≤n',
					'因此r(AB)=r(BC)=0，',
					'则AB=BC=0',
					'因此r(A)+r(B)≤n，且r(B)+r(C)≤p',
					'即n+r(B)≤n，且r(B)+p≤p',
					'则r(B)=0，即B=0']),
			kxA([piece([
				'r(A+B)-n = r(B+A)-n',
				'r(A-B)-n = r(B-A)-n',
				'r(kA+bB)-n',
				'r(A,B)-n'
				],1) + ' ≤ r(A) + r(B) - n ','≤ r(AB) ≤ \\min(r(A), r(B)) ≤ '+piece(['r(A)','r(B)'])+' ≤ r(A|B)',
				'证明：','上推']),

			kxA(['r(AR) = r(LA) = r(A)','其中R、L可逆','证明：','上推或利用初等变换','（可逆矩阵是若干个初等矩阵的乘积）','不改变矩阵的秩']),
			kxA(['r(AP) = r(PA) = r(A)','其中A是方阵，P可逆','证明：上推']),
			piece(ZLR('A与B','相似 合同 等价'),1)+' ⇒ r(B) = r(A)',
			kxA(['r(A^T) = r(AA^T) = r(kA) = r(-A) = r(A)','其中k≠0']),


				
			ztable([['r(A)','r(A^*)','证明'],
				ZLR('n n 满秩，可逆'),
				['n-1',1,zarray(['A^*至少有一个元素，','是A的n-1阶子式，','不为0','r(A)+r(A^*)-n≤r(AA^*)=r(0)=0','因此1≤r(A^*)≤1'])],
				['< n-1',0,zarray(['A^*所有元素，','是A的n-1阶子式，','都为0'])]]),
				
			]),'','____'),
	ZLR('转置\nTranspose____A^T____'+khrA(['(a_{ji})','行列元素互换'])+'____'+
		kul([
		'(A^T)^T = A',
		'(kA)^T = kA^T',
		'(A + B)^T = A^T + B^T',
		'(kA + bB)^T = kA^T + bB^T',
		'(AB)^T = B^TA^T',
		'(a_{ij})_{m×n}^{^T}=(a_{ji}^T)_{n×m} 分块矩阵的转置',
		'(A^T)^{-1}=(A^{-1})^T',
		'(A^T)^*=(A^*)^T',
		'((A^T)^*)^{-1}=((A^T)^{-1})^*=((A^{-1})^T)^*=((A^{-1})^*)^T=((A^*)^T)^{-1}=((A^*)^{-1})^T',
		'|A^T| = |A|',
		'r(A^T) = r(A)',

		]),'','____'),

	ZLR('共轭转置\nConjugate Transpose____'+khrA(['A^H',kxf('conj')+'(A)','物理学科使用符号A^\\dag'])+'____A^H = '+kxo('A^T')+' = '+kxo('A')+'^T____性质（同上）','','____'),

	ZLR('行列式\nDeterminant____|A|\\\\ \\det A____'+
		kxA([sum('','j_1j_2⋯j_n','','(-1)^{τ(j_1j_2⋯j_n)}a_{1j_1}a_{2j_2}⋯a_{nj_n}','',''),
		'取遍所有n元乘积',' （不同行不同列，共n!种）','（奇排列还需乘以系数-1）','的代数和','其中τ表示求排列的反序数',
		])+'____','','____'),
			
	ZLR('积和式\nPermanent____'+kxf('per')+'A\\\\ '+kxf('perm')+' A____'+kbrA([sum('','j_1j_2⋯j_n','','a_{1j_1}a_{2j_2}⋯a_{nj_n}','',''),
			'取遍所有n元乘积','（不同行不同列，共n!种）','的和',
			'与行列式的差异：是不考虑符号，且可以不是方阵'])+'____'+
		kul(['可以类似于行列式按某一行或某一列展开',

			kxf('per')+'(I) = 1',
			kxf('per')+'(A^T) = '+kxf('per')+'(A)',
			kxf('per')+'(kA) =k^n '+kxf('per')+'(A)',
			'一般不满足结合律',
			kxA([kxf('per')+'(PAQ) = '+kxf('per')+'(P)⋅'+kxf('per')+'(A)⋅'+kxf('per')+'(Q)',
				'其中P,Q都是对角阵，且A是方阵（非方阵时不成立）']),
		]),'','____'),
			
	ZLR('逆\ninverse____A^{-1}________'
		,'','____'),

	ZLR('广义逆矩阵\nMoore-Penrose逆____A^+\\\\ A_{m×n}^+____'+khrA(['同时满足'+piece(['AXA = A','XAX = X','AX = (AX)^H','XA = (XA)^H'])+'的唯一解',
		'广义逆'+piece(['A^{\\{1\\}}记作A^-','A^{\\{1,2\\}}','A^{\\{1,3\\}}','A^{\\{1,4\\}}','A^{\\{1,2,3,4\\}}记作A^+'])])+'____'+
		'A^+ = '+piece([
			['C^H(CC^H)^{-1}(B^HB)^{-1}B^H \\\\ 其中，满秩分解A = B_{m×r} C_{r×n}'],
			['VS^+U^H\\\\ 其中，'+kxf('SVD')+'奇异值分解\\\\ A = US_{m×n}V^H']
			]),'','____'),



	ZLR('余子式\n____M_{ij}____A去掉i行j列，\\\\ 得到n-1阶的行列式____','','____'),
	ZLR('代数余子式\n____A_{ij}____(-1)^{i+j}M_{ij}____'+
		kul([sum('k',1,'n','a_{ik}A_{ik}','','')+' = |A|',
			kxA([sum('k',1,'n','a_{ik}A_{jk}','','')+' = 0',
			'其中i≠j',
			'证明：','原式相当于将j行替换为i行，而新行列式为0'])
		]),'','____'),
	ZLR('伴随矩阵\nAdjugate____A^*____(A_{ij})^T____'+
		kul(['A^* =  '+piece([['|A|A^{-1}','当A可逆时'],
				['0','当r(A) < n-1时'],
				['秩为1的矩阵','当r(A)=n-1时']
				]),
			'AA^* = A^*A = |A|I',
			kxA(['(kA)^* = k^{n-1}A^*','其中k≠0','证明：','伴随矩阵的每个元素是n-1阶子式']),
			'(-A)^* = (-1)^{n-1}A^* ~ 其中k≠0~','推论：已知奇数阶A^*，反过来求A时有两种可能',
			'(A^*)^* = |A|^{n-2}A',
			'(kA^*)^* = k^{n-1}|A|^{n-2}A ~ 证明：上推',
			'(A^*)^T = (A^T)^*',
			'(A^*)^{-1} = (A^{-1})^* = '+frac('A','|A|',''),
			'((A^T)^*)^{-1}=((A^T)^{-1})^*=((A^{-1})^T)^*=((A^{-1})^*)^T=((A^*)^T)^{-1}=((A^*)^{-1})^T',
			'(AB)^* = B^*A^* ~ 其中A、B可逆',
			'|A^*| = |A|^{n-1}',



			'分块矩阵的伴随矩阵用公式A^*=|A|A^{-1}来求'
			]),'','____'),

	ZLR('友矩阵\n伴侣矩阵\nCompanion____M_{d(λ)}____多项式d(λ) = '+
		piece(['主对角线都为0',
			'主对角线上（或下）方的元素均为1',
			'最后一行元素依次是b_i',
			'其余元素均为0'])+'____'+
		kul(['特征根多项式是首一多项式','不变因子是1,⋯,1,d(λ)']),'','____'),


	ZLR('λ矩阵____A(λ)____矩阵元素都是λ的多项式_'+
		kul(['λ矩阵可逆 ⇔ |A(λ)| = 非零常数c ≠ 0',
			'λ矩阵等价 ⇔ '+piece(['B(λ) = P(λ)A(λ)Q(λ)','其中P(λ)，Q(λ)均可逆','秩相等且初等因子相同','行列式因子相同','不变因子相同'])]),'','____'),

	ZLR('化零多项式\n零化多项式____f(λ)____f(A) = 0\\\\ 使得向量线性变换后为0（零变换）的多项式____'+
		kul(['不唯一',
			'特征多项式是化零多项式'
		]),'','____'),

	ZLR('标准型\n典范型\nSmith____'+kxf('diag')+'(d_1(λ), d_2(λ), ⋯, d_r(λ), 0, ⋯, 0)____对角矩阵\n主对角线上是首1多项式\n且依次整除后一个____'+
		kul(['唯一','任何非零λ矩阵都与标准型等价']),'','____'),
		
	ZLR('有理标准型\nFrobenius canonical form________'+
		kul(['唯一','任何非零λ矩阵都与标准型等价']),'','____'),
		
		
	ZLR('行列式因子\n____D_i(λ)____所有i阶子式的首1最大公因式____'+
		kul(['D_0(λ)'+eq('def')+1,
			'D_n(λ)=|λI-A|']),'','____'),
		
	ZLR('不变因子\n____d_i(λ)____标准型主对角线上的非零元素$'+frac('D_i(λ)','D_{i-1}(λ)','')+'$____'+
		kul(['利用不变因子求初等因子\n'])+kol(['写成标准分解式','列出各分解式中各个1次因子（最高次）幂，得到初等因子']),'','____'),
		
	ZLR('最小多项式____d_r(λ) \\\\ m(λ)____标准型主对角线上最后一个非零元素\n最大（最后）的不变因子\n其中r为秩\n首1（首项系数为1）且次数最低的化零多项式____'+
		kul(['唯一','特征多项式不一定是最小多项式','能整除所有化零多项式，当然也整除特征多项式',
			'最小多项式没有重根 ⇔ 矩阵可对角化',
			'矩阵相似有相同的最小多项式（但反之不成立）',
			'A^{-1}的最小多项式是'+frac('λ^n','m(0)','')+'m'+lrp('',frac(1,'λ',''),'',''),
			''+kxf('diag')+'(A_1(λ), A_2(λ), ⋯)的最小多项式是'+kxf('lcm')+'[m_1(λ), m_2(λ), ⋯]',
			'm(A) = 0',
		
		]),'','____'),
		
	ZLR('初等因子\n____(λ-λ_i)^s____不变因子标准分解式中出现的不同1次因子的幂____'+
		kul(['利用初等因子求不变因子\n'])+kol(['不同1次因子，放在不同行','相同1次因子，放在同行','同一行按降幂排列（不足n个，后面补齐1，使每行都有r个因子）',
			'从左到右，同一列相乘','依次得到不变因子'+
			'd_r(λ),d_{r-1}(λ),⋯ ,d_1(λ) ']),'','____'),
		
	ZLR('若尔当块\nJordan Block\n____J_i(λ)____主对角线都是λ，主对角线下方都是1，其余都为0____'+
		'','','____'),
		
	ZLR('若尔当矩阵\nJordan\n____J(λ)____由若干个若尔当块组成的准对角矩阵____'+
		'','','____'),

	ZLR('特征矩阵\nEigen____λI-A________'+
		kul(['特征矩阵等价 ⇔ 矩阵相似']),'','____'),
		
	ZLR('特征多项式\nEigen polynomial____|λI-A|\n________'+
		kul(['f(A) = 0'+kbox('Hamilton-Caylay定理'),
			'|kI-A| = f(k) = (k-λ_1)(k-λ_2)⋯(k-λ_n)',
			'|A-kI| = (-1)^n|kI-A| = (-1)^nf(k) = (-1)^n(k-λ_1)(k-λ_2)⋯(k-λ_n)',
			'A^T与A的特征多项式相同'
			]),'','____'),

	ZLR('特征值\nEigen value____λ_i____'+khrA(['|λI-A|=0的根','最小多项式的根'])+'____'+
		kul(['|A| = λ_1λ_2⋯λ_n = '+prod('i',1,'n','λ_i','',''),
			'\\text{tr}(A) = a_{11}+a_{22}+⋯+a_{nn} = λ_1+λ_2+⋯+λ_n = '+sum('i',1,'n','λ_i','',''),
			'A可逆  ⇔  λ≠0',
			'φ(λ)是矩阵多项式φ(A)的特征值 ⇒ \\\\ '+piece([
					'kλ是kA的特征值',
					'λ^m是A^m的特征值',
					'λ^{-1}是A^{-1}的特征值 （A可逆时）',
					frac('|A|','λ','')+'是A^*的特征值 （A可逆时）',
					'φ(A)与A特征向量相同，φ(A)x=φ(λ)x',

				]),
			'A^T与A的特征值相同（但特征向量不一定相同）',
			kxA(['AB与BA的特征值相同（但不一定相似）','证明：','用分块矩阵证明',zmtrx([['I','A'],['O','I']])+zmtrx([['λI-AB','O'],['B','I']])+' = '+zmtrx([['I','O'],['B','λI-BA']])+zmtrx([['I','A'],['O','I']]),
				'两边取行列式，化简得到','|λI-AB|=|λI-BA|','则AB与BA的特征值相同']),
			kxA(['A,B同为n阶上三（下三、对）角阵 ','⇒ AB特征值是A特征值、B特征值按次序相乘的乘积']),
			kxA(['相似矩阵的特征值相同','反之不成立！','举例：',zmtrx([[1,1],[0,1]])+'与'+zmtrx([[1,0],[0,1]])]),
			'实对称阵的特征值为实数',
			kxA(['A的特征值互异（无重根） ','⇒ A与对角阵Λ='+kxf('diag')+'(λ_1,λ_2,⋯,λ_n)相似（可对角化）']),
			'正交矩阵的特征值只能是1或-1',
			kxA(['A=αβ^T','其中α，β均非零 ','有特征值0（n-1重），\\text{tr}(A)']),
			'行和相等（都是b）矩阵的必有特征值b',
			]),'','____'),
		
	ZLR('特征向量\nEigen____p_i____λ_i对应的向量（之间线性无关）____'+
		kul(['P^{-1}AP = Λ = '+kxf('diag')+'(λ_1,λ_2,⋯,λ_n) \\\\ 其中P=(P_1,P_2,⋯,P_n)',
			'A = PΛP^{-1}',
			'A^k = PΛ^kP^{-1}',
			'实对称阵的不同特征值下的特征向量正交',
			'下列命题等价'+piece(['A与对角阵相似（可对角化）','A有n个线性无关的特征向量','A的特征值的代数重数等于几何重数','最小多项式没有重根']),
			'矩阵多项式与原矩阵特征向量相同：P(A)x=P(λ)x',
			'A、B=P^{-1}AP相似，A有特征向量x ⇒ B有特征向量P^{-1}x',
			'证明：Ax=kx ⇒ PBP^{-1}x=kx ⇒  B(P^{-1}x)=k(P^{-1}x)',
			kxA(['A=αβ^T','其中α，β均非零 ','特征向量有α、Ax=0的基础解系']),
			kxA(['行和相等矩阵的必有特征值是该行和b',
				'相应特征向量有α=(1,⋯,1)^T']),
			]),'','____'),

	ZLR('谱\nSpectrum____\\{λ_i\\}____特征值集合____'+

		'','','____'),

	ZLR('谱半径\nspectral radius____ρ(A)____\\max\\{|λ_i|\\}\n特征值绝对值（复数取模）中的最大值____'+
		kul(['谱半径不大于矩阵范数\n即ρ(A)≤\\| A\\| ',
			'∀方阵A,e>0，∃一种矩阵范数使得\\| A\\| <ρ(A)+e',
			lim('k','+','\\| a^k\\| ^{1/k}','','')+' = ρ(A)'+kbox('Gelfand定理'),
			'矩阵序列 I,A,A^2,…A^k,… 收敛于零 \\\\ ⇔ ρ(A)<1 ⇔ '+sum('k','0','+','a^k','','')+'=I-A^{-1}',
		]),'','____'),

	ZLR('迹\ntrace____'+kxf('tr')+'(A)____'+sum('i',1,'n','a_{ii}','','')+'____'+kul([
		'线性'+kul([
			kxf('tr')+'(A+B) = '+kxf('tr')+'(A) + '+kxf('tr')+'(B)',
			kxf('tr')+'(kA) = k'+kxf('tr')+'(A)',
			]),
		'线性算子d '+kxf('tr')+'(A) = '+kxf('tr')+'(dA)',
		kxf('tr')+'(A) = '+sum('i',1,'n','λ_i','','')+ ' = '+sum('i',1,'n','a_{ii}','',''),
		kxf('tr')+'(AB) = '+kxf('tr')+'(BA) ≠ '+kxf('tr')+'(A)'+kxf('tr')+'(B)',
		kxA([kxf('tr')+'(AA^T) = '+kxf('tr')+'(A^TA)','但AA^T与A^TA两矩阵主对角线元素','（分别是行平方和：行向量内积，列平方和：列向量内积）','不一定分别相等']),
		kxA([kxf('tr')+'(AA^T) = 0 ⇔ A=0 ⇔ '+kxf('tr')+'(AA^T)=0','证明：','矩阵AA^T主对角线上元素b_{ii}','都是A的第i行元素平方和','迹为0，则所有平方和为0，','所有元素都为0']),
		]),'','____'),

	ZLR('奇异值\nsingular value____σ_i(A)='+kroot('λ_i(A^HA)')+'____A^HA的特征值（也即AA^H的特征值）的算术平方根(非负)'+'____'+
		kul(['方阵的奇异值与特征值一般无关系',
			'酉变换不改变矩阵的奇异值',
			'r(A) = 正奇异值个数 ?'
		]),'','____'),
	ZLR('子式\nminor________任选k行k列组成的子行列式'+
		'','','____'),
	ZLR('主子式\nPrincipal minor________任选k行与相应k列组成的子行列式'+

		'','','____'),
	ZLR('顺序主子式\nLeading principal minor\ncorner minor____|(a_{ij})_k|'+

		'','','____'),



	ZLR('范数\nnorm____________'+kul(['正定性'+piece(['\\| A\\| ≥0','\\| A\\| =0 ⇔ A=0']),
			'齐次性 \\| aA\\| =|a|\\| A\\| ',
			'三角不等式\\| A+B\\| ≤\\| A\\| +\\| B\\| ',
			'相容性\\| AB\\| ≤\\| A\\| \\| B\\| ',
			'矩阵范数和向量范数的区别，是多了相容性这一条',
			kxA(['酉不变范数：范数\\| ·\\| ','满足\\| A\\| =\\| UAV\\| ','对∀矩阵A以及酉矩阵U,V成立']),
			'2-范数和F-范数是酉不变范数',
		
			])+
		'','','____'),

	ZLR('条件数\ncondition____'+kxA(ZLR(ZLR3('cond',['_1(A)','_2(A)','_∞(A)','(A,1)','(A,2)','(A,inf)'],'',' ')))+'____矩阵A的范数与A的逆矩阵的范数的乘积'+

		'','','____'),


],'wiki').replace(/\n/g,br))+



detail('线性方程组的解',Table([['线性方程组','无解的充要条件',
					'唯一解的充要条件','唯一解',
					'无穷多解的充要条件',kbrA(['无穷多解','基础解系中有n-r(A)个解向量']),
				]],[
				['A是m×n阶矩阵的情况下','','','','',''],
				['Ax=0','不可能无解（必有零解）',
					'r(A) = n','零解',
					'r(A) < n','基础解系的线性组合',
					],
				['Ax=b','r(A) < r(A|b)≤ n',
					'r(A) = r(A|b) = n','',
					'r(A) = r(A|b) < n','特解+基础解系的线性组合'
					],
				[kbrA(['AX=B','其中B是m×s阶','X是n×s阶']),'r(A) < r(A|B) ≤ n',
					'r(A) = r(A|B) = n','',
					'r(A) = r(A|B) < n','特解_{n×s}+基础解系矩阵_{n,n-r(A)}×系数矩阵_{n-r(A),s}',
					],
	
	
				['A是n阶方阵的情况下'],
				['Ax=0','不可能无解（必有零解）',
					Eq(['r(A) = n','A可逆，','|A|≠0'],'','','⇔'),'零解',
					Eq(['r(A) < n','A不可逆','|A|=0'],'','','⇔'),'基础解系的线性组合',
					],
				['Ax=b','r(A) < r(A|b)≤ n',
					'同上','A^{-1}b',
					kxA(['r(A) = r(A|b) < n','此时必有|A|=0，即A不可逆']),'特解+基础解系的线性组合',
					],
				[kbrA(['AX=B','其中B是n×s阶','X是n×s阶']),'r(A) < r(A|B) ≤ n',
					'同上','A^{-1}B',
					kxA(['r(A) = r(A|B) < n','此时必有|A|=0，即A不可逆']),'特解_{n×s}+基础解系矩阵_{n,n-r(A)}×系数矩阵_{n-r(A),s}'
				],
	
	

],'wiki').replace(/\n/g,br))+


detail('范数类型',Table([['类型','向量','矩阵','函数','算子','空间']],[
			['0-范数','非0元素的个数','','','',''],
			['1-范数','元素绝对值之和 ∑|a_i|',zarray(['列和范数','列向量1-范数','（列元素绝对值之和）的最大值']),'','',''],
			['2-范数',zarray(['元素平方和的算术平方根','向量模',kxf('Euclid')+'范数']),zarray(['谱范数','最大奇异值','\\max '+kroot('λ_i(A^HA)')]),'积分'+kroot(intl('f^2(x)','a','b','x','','')),'',''],
			['p-范数','元素p方和的算术p次方根','','','',''],
			['∞-范数','元素绝对值最大值 \\max |a_i|',zarray(['行和范数','行向量1-范数','（行元素绝对值之和）的最大值']),'','',''],
			['-∞-范数','元素绝对值最小值 \\min |a_i|','','','',''],
			[zarray([kxf('Frobenius')+'范数','F-范数',kxf('Euclid')+'范数','E-范数']),'2-范数',
				zarray(['所有奇异值组成的向量的2-范数','元素绝对值的平方和的算术平方根','\\| AB\\| _F ≤ \\| A\\| _F\\| B\\| _2 ',' \\| AB\\| _F ≤ \\| A\\| _2\\| B\\| _F']),'','',''],
			['核范数','-','奇异值之和'+sum('i',1,'n','λ_i','',''),'','','']

],'wiki').replace(/\n/g,br))



);